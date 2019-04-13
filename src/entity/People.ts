import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable
} from 'typeorm';
import { Film } from './films';

@Entity()
export class People {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  height: number;

  @Column()
  mass: string;

  @Column()
  hairColor: string;

  @Column()
  skinColor: string;

  @Column()
  eyeColor: string;

  @Column()
  birthYear: string;

  @Column()
  gender: string;

  @ManyToMany(_type => Film, film => film.characters)
  films: Film[];
}
