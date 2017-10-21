export const routeNames = {
  index: { path: '/', url: () => '/' },
  blog: { path: '/blog/:id', url: (id: number) => `/blog/${id}` },
  addBlog: { path: '/new', url: () => '/new' },
  searchResults: { path: '/search/:query?', url: (searchText: string) => `/search/${searchText}`}
}