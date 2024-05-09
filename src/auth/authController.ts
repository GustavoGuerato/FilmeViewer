
import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './authService';
import { LocalAuthGuard } from './local-auth.guard';
import { LoginDto } from './dto/loginDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
