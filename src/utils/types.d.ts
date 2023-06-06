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

export interface ICategories {
  categories: Category[]
}

export interface Category {
  name: string
  tag: string
  icon: IImage
  poster: IImage
}

export interface IImage {
  fileName: string
  url: string
}

export interface IBanners {
  banners: Banner[]
}

export interface Banner {
  id?: string
  name?: string
  description?: string
  price?: string
  thumbnail: IImage
  quantity?: number | undefined
}

export interface IProms {
  proms: Product[]
}

export interface ICart {
  product: Product[]
}

export interface IBooking {
  name: string
  surname: string
  dni: string
  phone: string
  mail: string
  event: string
  timeEvent: string
  dateEvent: any
  people: string
  request: string
}
