import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiBody } from '@nestjs/swagger';
import { Request } from 'express';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { any } from 'joi';

@ApiBearerAuth()
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    const data = await this.authService.signUp(createUserDto);
    return { message: 'Registration User Successful', data };
  }

  @ApiBody({ type: AuthDto })
  @Post('signin')
  async signin(@Body() user: AuthDto) {
    const data = await this.authService.signIn(user);
    return { message: 'Login Successful', data };
  }

  @UseGuards(AccessTokenGuard)
  @Get('logout')
  logout(@Req() req: any) {
    this.authService.logout(req.user['sub']);
  }

  @ApiBody({ type: any })
  @Post('refresh')
  refreshTokens(@Body() req: Request) {
    const userId = req['sub'];
    const refreshToken = req['refreshToken'];
    return this.authService.refreshTokens(userId, refreshToken);
  }
}
