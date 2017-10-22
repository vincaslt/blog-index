import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { BlogEntity } from './BlogEntity'

@Entity()
export class RatingEntity {

  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public ip: string

  @Column()
  public rating: number

  @Column()
  public date: Date

  @ManyToOne((type) => BlogEntity, (blog) => blog.ratings)
  public blog: BlogEntity
}