import { CreatePokemonDto } from './create-pokemon.dto';
import { OmitType, PartialType } from '@nestjs/swagger';

export class UpdatePokemonDto extends PartialType(
  OmitType(CreatePokemonDto, ['no' as const]),
) {}
