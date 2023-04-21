import { ApiProperty } from '@nestjs/swagger';
import { IsString, Min, MinLength, IsInt, IsPositive } from 'class-validator';

export class CreatePokemonDto {
  @ApiProperty({ description: 'The no of the pokemon', example: 2 })
  @IsInt()
  @IsPositive()
  @Min(1)
  public no: number;

  @ApiProperty({ description: 'The name of the pokemon', example: 'Charizard' })
  @IsString()
  @MinLength(1)
  public name: string;
}
