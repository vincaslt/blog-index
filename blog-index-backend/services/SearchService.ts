import { getRepository } from 'typeorm'
import { BlogEntity } from '../entities/BlogEntity'
import { CategoryEntity } from '../entities/CategoryEntity'

export class SearchService {

  /**
   * Returns blogs (without relations) matched to query by title then tags
   * @param searchQuery 
   * @param start 
   * @param end 
   */
  public static async searchByTitleOrTagsWithCategory(
    searchQuery: string,
    start: number,
    end: number,
    categoryId?: number
  ): Promise<[BlogEntity[], number]> {
    const limit = end - start
    const blogRepo = getRepository(BlogEntity)
    const parts = searchQuery.split(' ')

    const byTitleQuery = blogRepo.createQueryBuilder('blog')
    parts.forEach((part) => {
      byTitleQuery
        .andWhere('blog.title like :part', { part: `%${part}%` })
    })
    byTitleQuery.skip(start).take(limit)

    const byTagsQuery = blogRepo.createQueryBuilder('blog')
    parts.forEach((part) => {
      byTagsQuery
        .andWhere('blog.tags like :part', { part: `%${part}%` })
        .andWhere('not blog.title like :part', { part: `%${part}%` })
    })

    if (categoryId !== undefined) {
      byTitleQuery.andWhere('blog.categoryId = :categoryId', { categoryId })
      byTagsQuery.andWhere('blog.categoryId = :categoryId', { categoryId })
    }

    const [blogsByTitle, totalByTitle] = await byTitleQuery.getManyAndCount()
    
    if (blogsByTitle.length === limit) {
      const totalByTags = await byTagsQuery.getCount()
      return [blogsByTitle, totalByTitle + totalByTags]
    } else {
      byTagsQuery
        .skip(Math.max(0, start - blogsByTitle.length))
        .take(Math.max(0, end - blogsByTitle.length))
      const [blogsByTags, totalByTags] = await byTagsQuery.getManyAndCount()
      return [[...blogsByTitle, ...blogsByTags], totalByTitle + totalByTags]
    }
  }

  // TODO: remove if not needed, but should be useable for showcase
  public static async searchByCategory(
    categoryId: number,
    start: number,
    end: number
  ): Promise<[BlogEntity[], number]> {
    const limit = end - start
    const blogRepo = getRepository(BlogEntity)
    const categoryRepo = getRepository(CategoryEntity)
    const category = categoryRepo.findOneById(categoryId)
    if (category) {
      return blogRepo.findAndCount({ skip: start, take: limit, where: { category }})
    }
    throw new Error(`Category with id ${categoryId} was not found`)
  }

}