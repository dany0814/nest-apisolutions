import { ApiProperty } from '@nestjs/swagger';
import { IsString, Min, MinLength, IsInt, IsPositive } from 'class-validator';

export class CreatePokemonDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  @ApiProperty({ description: 'The no of the pokemon' })
  no: number;
  @IsString()
  @MinLength(1)
  @ApiProperty({ description: 'The name of the pokemon' })
  name: string;
}
