import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePokemonDto extends PartialType(
  OmitType(CreatePokemonDto, ['no' as const]),
) {
  @ApiProperty({ description: 'The name of the pokemon' })
  name: string;
}
