import Loading from "@/app/loading";
import Cart from "@/components/CartPage";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function CartPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Cart />
    </Suspense>
  );
}