
import { notFound } from "next/navigation";
import { getProductById } from "@/app/lib/product";
import ProductDisplay from "@/components/ProductDisplay";
import { ProductType } from "@/components/assets/assets";

export default async function SingleProduct({ params }: { params: Promise<{ id: string }> }) {
  
  const {id} = await params
  const product = getProductById(Number(id))

  if (!product) {
    return notFound();
  } 

  return (
    <ProductDisplay product={product} />
  );
}
