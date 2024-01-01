import {
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';
import Redis from 'ioredis';
import { ConfigService } from '@nestjs/config';

export class InvalidatedRefreshTokenError extends Error {}

@Injectable()
export class RefreshTokenStorage
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  private redisClient: Redis;

  constructor(private readonly configService: ConfigService) {}

  onApplicationBootstrap() {
    this.redisClient = new Redis({
      host: this.configService.get('REDIS_HOST'),
      port: this.configService.get('REDIS_PORT'),
    });
  }

  onApplicationShutdown(signal?: string) {
    return this.redisClient.quit();
  }

  async insert(userId: string, tokenId: string): Promise<void> {
    await this.redisClient.set(this.getKey(userId), tokenId);
  }

  async validate(userId: string, token: string): Promise<boolean> {
    const storedId = await this.redisClient.get(this.getKey(userId));
    if (storedId !== token) {
      throw new InvalidatedRefreshTokenError();
    }
    return storedId === token;
  }

  async invalidate(userId: string): Promise<void> {
    await this.redisClient.del(this.getKey(userId));
  }

  private getKey(userId: string): string {
    return `user-${userId}`;
  }
}
