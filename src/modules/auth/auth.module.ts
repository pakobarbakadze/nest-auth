import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';
import { RefreshTokenStorage } from './refresh-token-storage.service';
import { JwtRefreshTokenStrategy } from './strategy/jwt-refresh.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.ACCESS_JWT_SECRET,
      signOptions: { expiresIn: '15m' },
    }),
  ],
  providers: [
    AuthService,
    RefreshTokenStorage,
    LocalStrategy,
    JwtStrategy,
    JwtRefreshTokenStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
