export interface IProducts {
  products: Product[]
}
export interface Product {
  id?: string
  name?: string
  description?: string
  price?: string
  quantity?: number | undefined
}

export interface ICategory {
  name: string
  tag: string
}

export interface IBanners {
  name?: string
  description?: string
  price?: string
}

export interface ICart {
  product: Product[]
}