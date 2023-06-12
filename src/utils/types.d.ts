export interface IProducts {
  products: Product[]
}
export interface Product {
  id?: string
  name?: string
  description?: string
  price?: string
  quantity?: number | undefined
  thumbnail?: IImage
  tags?: string
  categories?: Category[]
}

export interface ICategories {
  categories: Category[]
}

export interface Category {
  name?: string
  description?: string
  slug?: string
  icon?: IImage
  thumbnail?: IImage
  products: Product[]
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
  proms: Proms[]
}

export interface Prom {
  id?: string
  name?: string  
  order?: number
  productProms?: ProductProm[]
}

export interface FeaturedProms {
  productProms: ProductProm[]
}
export interface ProductProm {
  id?: string
  name?: string
  description?: string
  price?: string
  tag?: string
  thumbnail: IImage
  featured?: boolean
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

export interface IInfo {
  infos: Info[]
}

export interface Info {
  id?: string
  company?: string
  address?: string
  location?: ILocation
  social?: ISocial
}

export interface ILocation {
  latitude?: string
  longitude?: string
}

export interface ISocial {
  whatsapp?: string
  instagram?: string
  twitter?: string
  tiktok?: string
}