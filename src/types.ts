export interface ProductItem {
  id: number
  title: string
  description: string
  price: number
  category: string
  rating: number
  stock: number

  brand?: string
  thumbnail?: string
}

export interface Dimensions {
  width: number
  height: number
  depth: number
}

export interface Review {
  rating: number
  comment: string
  date: string
  reviewerName: string
}

export interface Product extends ProductItem {
  tags: string[]
  sku: string
  weight: number
  dimensions: Dimensions
  warrantyInformation: string
  shippingInformation: string
  reviews: Review[]

  images?: string[]
}

export interface Catalog {
  products: ProductItem[]
}
