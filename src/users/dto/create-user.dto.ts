import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';
export class CreateUserDto {
  @IsString({ message: 'The name field is string' })
  @IsNotEmpty({ message: 'The lastName field is required' })
  @ApiProperty({ uniqueItems: true })
  name: string;
  @IsString({ message: 'The username field is string' })
  @IsNotEmpty({ message: 'The lastName field is required' })
  @ApiProperty({ uniqueItems: true })
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have a Uppercase, lowercase letter and a number',
  })
  username: string;
  @IsString({ message: 'The password field is string' })
  @IsNotEmpty({ message: 'The lastName field is required' })
  @ApiProperty({ uniqueItems: true })
  password: string;
  @IsString({ message: 'The refreshToken field is string' })
  @ApiProperty({ type: 'string' })
  refreshToken?: string;
}
