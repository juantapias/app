export interface IProducts {
  products: Product[]
}
export interface Product {
  name: string
  description: string
  price: string
}

export interface ICategory {
  name: string
  tag: string
}

export interface IBanners {
  name: string
  description: string
  price: string
}