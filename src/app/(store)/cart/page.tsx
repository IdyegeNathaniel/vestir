import Cart from "@/components/CartPage";
import { Typography } from "@mui/material";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function CartPage() {
  return (
    <Suspense fallback={<Typography>Loading...</Typography>}>
      <Cart />
    </Suspense>
  );
}
