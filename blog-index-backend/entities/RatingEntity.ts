import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index } from 'typeorm'
import { BlogEntity } from './BlogEntity'

@Entity()
@Index('blog_rating_per_ip', ['ip', 'blog'], { unique: true })
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