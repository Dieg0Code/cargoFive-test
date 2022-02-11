import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

//TODO: extraer el secret usando @nesjs/config
export const jwtSecret = 'superSecretKeyXD';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({ secret: jwtSecret, signOptions: { expiresIn: '1d' } }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], // 👈 exponer el JwtStrategy
})
export class AuthModule {}
