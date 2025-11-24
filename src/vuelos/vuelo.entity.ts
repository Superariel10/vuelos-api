import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vuelo')
export class Vuelo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  origen: string;
  
  @Column()
  destino: string;

  @Column()
  fecha: Date;

  @Column()
  precio: number;

  @Column()
  asientos_disponibles: number;

  @Column()
  estado: boolean;
}
