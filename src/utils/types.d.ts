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