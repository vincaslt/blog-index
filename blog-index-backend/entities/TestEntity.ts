import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Test {

  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public test: string
}