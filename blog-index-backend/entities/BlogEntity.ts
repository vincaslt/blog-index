import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm'
import { CategoryEntity } from './CategoryEntity'
import { PhotoEntity } from './PhotoEntity'
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

  @OneToOne(() => PhotoEntity)
  @JoinColumn()
  public photo: PhotoEntity

  @OneToMany(() => RatingEntity, (rating) => rating.blog)
  public ratings: RatingEntity[]
}