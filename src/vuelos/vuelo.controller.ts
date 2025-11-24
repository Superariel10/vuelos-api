import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { VuelosService } from './vuelo.service';
import { CreateVueloDto } from './dto/create-vuelo.dto';
import { UpdatevueloDto } from './dto/update-vuelo.dto';

@Controller('vuelo')
export class VueloController {
  constructor(private readonly vueloService: VuelosService) {}

  @Post()
  create(@Body() createvueloDto: CreateVueloDto) {
    return this.vueloService.create(createvueloDto);
  }

  @Get()
  findAll() {
    return this.vueloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vueloService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatevueloDto: UpdatevueloDto) {
    return this.vueloService.update(id, updatevueloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vueloService.remove(id);
  }
  @Post('calculo-promedio')
  calculoPromedio(@Body() dataBody: any) {
    return this.vueloService.create(dataBody);
  }
  @Post('contar-rutas')
  contarrutas(@Body() dataBody: any) {
    return this.vueloService.contarrutas(dataBody);
  }
}
