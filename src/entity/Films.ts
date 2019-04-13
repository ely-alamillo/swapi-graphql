import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable
} from 'typeorm';
import { People } from './people';

@Entity()
export class Film {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  episodeId: number;

  @Column()
  openingCrawl: string;

  @Column()
  director: string;

  @Column()
  producer: string;

  @Column('date')
  releaseDate: string;

  // uderscore gets rid of tslint error
  @ManyToMany(_type => People, people => people.films)
  @JoinTable()
  characters: People[];
}
