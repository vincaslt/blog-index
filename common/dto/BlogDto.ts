import { CategoryDto } from './CategoryDto'

export interface BlogDto {
  id: number
  title: string
  category: CategoryDto
  link: string
  yourRating?: number
  rating?: number
  tags?: string[]
  tagline?: string
  description: string
  photo: string
}