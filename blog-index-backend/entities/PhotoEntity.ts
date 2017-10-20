import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class PhotoEntity {

  @PrimaryGeneratedColumn()
  public id: number
  
  @Column()
  public path: string

  @Column()
  public mimetype: string

  @Column()
  public size: number
}