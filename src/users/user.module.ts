// user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), 
    JwtModule.register({  
      secret: 'your-secret-key', 
      signOptions: { expiresIn: '24h' }, 
    }),
  ],
  controllers: [UserController], 
  providers: [UserService, JwtStrategy], 
  exports: [UserService], 
})
export class UserModule {}
