export interface ProductItem {
  id: number
  title: string
  brand: string
  description: string
  price: number
  category: string
  rating: number
  stock: number
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
}

export interface Catalog {
  products: ProductItem[]
}
