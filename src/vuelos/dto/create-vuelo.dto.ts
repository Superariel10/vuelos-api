import { IsBoolean, IsNumber, IsString, IsDate } from 'class-validator';

export class CreateVueloDto {
  @IsString()
  name: string;
    
  @IsString()
  destino: string;
  
  @IsDate()
  fecha: Date;
  
  @IsNumber()
  precio: number;
  
  @IsNumber()
  asientos_disponibles: number;
  
  @IsBoolean()
  estado: boolean;
  
}
