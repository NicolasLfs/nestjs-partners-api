import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SpotsService } from '@app/core/spots/spots.service';
import { CriarLugaresRequest } from './request/criar-lugar.request';
import { AtualizarLugarRequest } from './request/atualizar-lugar.request';

@Controller('eventos/:eventoId/lugares')
export class LugaresController {
  constructor(private readonly spotsService: SpotsService) {}

  @Post()
  create(
    @Body() criarLugaresRequest: CriarLugaresRequest,
    @Param('eventoId') eventoId: string,
  ) {
    return this.spotsService.create({
      name: criarLugaresRequest.nome,
      eventId: eventoId,
    });
  }

  @Get()
  findAll(@Param('eventoId') eventoId: string) {
    return this.spotsService.findAll(eventoId);
  }

  @Get(':lugarId')
  findOne(@Param('id') lugarId: string, @Param('eventoId') eventoId: string) {
    return this.spotsService.findOne(lugarId, eventoId);
  }

  @Patch(':lugarId')
  update(
    @Param('id') lugarId: string,
    @Param('eventoId') eventoId: string,
    @Body() atualizarLugarRequest: AtualizarLugarRequest,
  ) {
    return this.spotsService.update(lugarId, eventoId, {
      name: atualizarLugarRequest.nome,
    });
  }

  @Delete(':lugarId')
  remove(@Param('id') lugarId: string, @Param('eventoId') eventoId: string) {
    return this.spotsService.remove(lugarId, eventoId);
  }
}
