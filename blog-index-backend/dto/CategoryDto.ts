export interface CategoryDto {
  id: number
  name: string
  icon: string
}

export interface CategoriesDto {
  categories: CategoryDto[]
}
