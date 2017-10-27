import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm'
import { BlogEntity } from './BlogEntity'

@Entity()
export class RatingEntity {
  @PrimaryColumn()
  public ip: string

  @Column()
  public rating: number

  @Column()
  public date: Date

  @ManyToOne((type) => BlogEntity, (blog) => blog.ratings, { primary: true })
  public blog: BlogEntity
}