import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm'
import { PhotoEntity } from './PhotoEntity'
import { RatingEntity } from './RatingEntity'

@Entity()
export class BlogEntity {

  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public title: string
  
  @Column()
  public category: string
  
  @Column()
  public link: string
  
  @Column({ type: 'simple-array', nullable: true })
  public tags?: string[]
  
  @Column({ nullable: true })
  public tagline?: string
  
  @Column()
  public description: string

  @OneToOne((type) => PhotoEntity)
  @JoinColumn()
  public photo: PhotoEntity

  @OneToMany((type) => RatingEntity, (rating) => rating.blog)
  public ratings: RatingEntity[]
}