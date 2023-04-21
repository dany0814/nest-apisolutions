import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';
export class CreateUserDto {
  @IsString({ message: 'The name field is string' })
  @IsNotEmpty({ message: 'The lastName field is required' })
  @ApiProperty({ uniqueItems: true })
  name: string;

  @IsString({ message: 'The username field is string' })
  @IsNotEmpty({ message: 'The lastName field is required' })
  @ApiProperty({ uniqueItems: true })
  username: string;

  @IsString({ message: 'The password field is string' })
  @IsNotEmpty({ message: 'The lastName field is required' })
  @ApiProperty({ uniqueItems: true })
  password: string;

  @IsOptional()
  @IsString({ message: 'The refreshToken field is string' })
  refreshToken?: string;
}
