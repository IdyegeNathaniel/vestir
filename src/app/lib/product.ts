import { products, ProductType } from "@/components/assets/assets";


//Get Product By id
export function getProductById(id: number): ProductType | undefined {
  return products.find((product) => product.id === id)
}


// Get products by category
// export function getProductsByCategory(category: string): Product[] {
//   return products.filter(
//     (product) => product.category.toLowerCase() === category.toLowerCase()
//   )
// }