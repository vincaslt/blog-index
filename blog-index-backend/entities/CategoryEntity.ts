import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { BlogEntity } from './BlogEntity'

@Entity()
export class CategoryEntity {

  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public name: string

  @Column()
  public icon: string

  @OneToMany(() => BlogEntity, (blog) => blog.category)
  public blogs: BlogEntity[]
}