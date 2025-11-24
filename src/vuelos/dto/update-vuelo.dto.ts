import { IsOptional, IsString, IsDate, IsNumber, IsBoolean } from 'class-validator';

export class UpdatevueloDto {
  @IsString()
  @IsOptional()
  name?: string;

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
