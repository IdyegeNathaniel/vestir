"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Footprints, Handbag, Shirt, ShoppingCart, Watch } from "lucide-react";
import Grid from "@mui/material/Grid";

export const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category");

  const handleCaegoryChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams);
    
    params.get(value || "all");

    router.push(`${pathname}?${params.toString()}`);
  };

        //fontSize: { xs: "12px", md: "14px", lg: "16px" },
    
    const gridStyling = {
        backgroundColor: "#fff",
        textDecoration: selectedCategory && "underline" ,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px 0",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "16px"


    }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "center", md: "space-between" },
        gap: { xs: 1, md: 3 },
        alignItems: { sx: "flex-start", md: "center" },
      }}
    >
      <Box sx={{ display: { xs: "column", md: "row" }, gap: 2 }}>
        <Typography variant="body2" sx={{ fontSize: "14px" }}>
          Variant Products
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "32px", md: "48px" }, fontWeight: 500 }}
        >
          Our Best Collections
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 3, md: 2 }} sx={{}}>
          {categories.map((category, index) => (
            <Grid
              key={index}
              onClick={ () => handleCaegoryChange(category.slug) }
              size={{ xs: 6, md: 4, lg: 2 }}
              sx={ gridStyling }
            >
              {category.icon}
              {category.name}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const categories = [
  {
    name: "All",
    icon: (
      <ShoppingCart
        style={{ width: "16px", height: "16px", paddingRight: "4px" }}
      />
    ),
    slug: "all",
  },
  {
    name: "Shirts",
    icon: (
      <Shirt style={{ width: "16px", height: "16px", paddingRight: "4px" }} />
    ),
    slug: "shirts",
  },
  {
    name: "Shoes",
    icon: (
      <Footprints
        style={{ width: "16px", height: "16px", paddingRight: "4px" }}
      />
    ),
    slug: "shoes",
  },
  {
    name: "Watches",
    icon: (
      <Watch style={{ width: "16px", height: "16px", paddingRight: "4px" }} />
    ),
    slug: "watches",
  },
  {
    name: "Bags",
    icon: (
      <Handbag style={{ width: "16px", height: "16px", paddingRight: "4px" }} />
    ),
    slug: "bags",
  },
];
