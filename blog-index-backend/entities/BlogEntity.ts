import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm'
import { CategoryEntity } from './CategoryEntity'
import { RatingEntity } from './RatingEntity'

@Entity()
export class BlogEntity {

  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public title: string
  
  @ManyToOne(() => CategoryEntity, (cat) => cat.blogs)
  public category: CategoryEntity
  
  @Column()
  public link: string
  
  @Column({ type: 'simple-array', nullable: true })
  public tags?: string[]
  
  @Column({ nullable: true })
  public tagline?: string
  
  @Column()
  public description: string

  @Column()
  public photo: string

  @OneToMany(() => RatingEntity, (rating) => rating.blog)
  public ratings: RatingEntity[]
}