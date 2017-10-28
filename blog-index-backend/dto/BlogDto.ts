export interface BlogDto {
  id: number
  title: string
  categoryId: number
  link: string
  yourRating?: number
  rating?: number
  tags?: string[]
  tagline?: string
  description: string
  photo: string
}