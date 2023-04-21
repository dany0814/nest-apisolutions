import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class AuthDto {
  @IsString({ message: 'The username field is string' })
  @IsNotEmpty({ message: 'The username field is required' })
  @ApiProperty({ uniqueItems: true })
  username: string;

  @IsString({ message: 'The password field is string' })
  @IsNotEmpty({ message: 'The password field is required' })
  @ApiProperty({ uniqueItems: true })
  password: string;
}
