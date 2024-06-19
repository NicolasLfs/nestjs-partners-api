import { PartialType } from '@nestjs/mapped-types';
import { CriarLugaresRequest } from './criar-lugar.request';

export class AtualizarLugarRequest extends PartialType(CriarLugaresRequest) {}
