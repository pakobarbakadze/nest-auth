import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/modules/user/entities/user.entity';
import { Post } from '@nestjs/common';

export class TypeOrmConfig {
  static async createTypeOrmOptions(
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> {
    return {
      type: 'postgres',
      host: configService.get<string>('DB_HOST'),
      port: configService.get<number>('DB_PORT'),
      username: configService.get<string>('DB_USER'),
      password: configService.get<string>('DB_PASSWORD'),
      database: configService.get<string>('DB_NAME'),
      entities: [User, Post],
      synchronize: true,
      autoLoadEntities: true,
    };
  }
}
