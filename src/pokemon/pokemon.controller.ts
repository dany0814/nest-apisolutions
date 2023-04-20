import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Res,
  Delete,
  Query,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id.pipe';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@ApiBearerAuth()
@ApiTags('pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  @ApiBody({ type: CreatePokemonDto })
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.pokemonService.findAll(paginationDto);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.pokemonService.findOne(term);
  }

  @Patch(':term')
  @ApiBody({
    description: 'Update a pokemon on UpdatePokemonDto',
    type: UpdatePokemonDto,
  })
  async update(
    @Param('term') term: string,
    @Body() updatePokemonDto: UpdatePokemonDto,
  ) {
    const data = await this.pokemonService.update(term, updatePokemonDto);
    return {
      message: 'Pokemon has been successfully updated',
      data,
    };
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.pokemonService.remove(id);
  }
}
