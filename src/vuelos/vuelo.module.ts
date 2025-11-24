import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VuelosService } from './vuelo.service';
import { VueloController } from './vuelo.controller';
import { Vuelo } from './vuelo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vuelo])],
  controllers: [VueloController],
  providers: [VuelosService],
})
export class CategoriesModule {}
