export type Category = {
  id: number
  name: string
}

export type Product = {
  id: string
  name: string
  description: string
  image_url: string
  price: number
  category_id: string
}
