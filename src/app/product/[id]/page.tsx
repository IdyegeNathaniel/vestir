import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import { notFound } from "next/navigation"

export default function SingleProduct({ params }: { params: { id: string } }) {

    const id = Number(params.id)


    return (
        <Box component="section" sx={{ padding: "24px" }}>

            {/* LEFT BOX */}
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
                <Box sx={{ width: "50%" }}>
                    <Box sx={{ width: "inherit", height: "450px", display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                        <Image src={sample.thumbnail} width={450} height={500} alt={sample.title} style={{ objectFit: "cover" }} />
                    </Box>

                    <Grid container spacing={{ xs: 2, md: 3 }} sx={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                        {
                            sample.images.map((item) => (
                                <Grid key={item} sx={{ cursor: "pointer", padding: "1px 2px", "&:hover": { border: "1px solid #000" } }}>
                                    <Image src={item} width={50} height={50} alt={`${item}image`} />
                                </Grid>
                            ))
                        }
                    </Grid>

                </Box>

                {/* RIGHT BOX */}

                <Box sx={{ width: "50%", gap: 3, padding: "4px" }}>
                    <Box>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                            <Typography variant="h4" sx={{ fontWeight: 600, }}>{sample.title}</Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600, bgcolor: "#235347", color: "white", padding: "3px 5px", borderRadius: "15px" }}>{sample.availabilityStatus}</Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: "#333", mb: 2 }}>{sample.description}</Typography>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>${sample.price}</Typography>
                        <Box>
                            <Typography></Typography>
                        </Box>
                    </Box>

                    {/* POLICIES & REVIEWS */}
                    <Box>
                        <Box>
                            <Typography variant="h5">Policies</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}


const sample =
{
    "id": 1,
    "title": "Blue & Black Check Shirt",
    "description": "The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.",
    "category": "mens-shirts",
    "price": 29.99,
    "discountPercentage": 15.35,
    "rating": 3.64,
    "brand": "Fashion Trends",
    "dimensions": {
        "width": 27.49,
        "height": 23.73,
        "depth": 28.61
    },
    "warrantyInformation": "3 year warranty",
    "shippingInformation": "Ships in 3-5 business days",
    "availabilityStatus": "In Stock",
    "reviews": [
        {
            "rating": 1,
            "comment": "Waste of money!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Logan Lee",
            "reviewerEmail": "logan.lee@x.dummyjson.com"
        },
        {
            "rating": 5,
            "comment": "Very satisfied!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Zachary Lee",
            "reviewerEmail": "zachary.lee@x.dummyjson.com"
        },
        {
            "rating": 4,
            "comment": "Fast shipping!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Aurora Rodriguez",
            "reviewerEmail": "aurora.rodriguez@x.dummyjson.com"
        }
    ],
    "returnPolicy": "30 days return policy",
    "minimumOrderQuantity": 18,
    "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "7148674604957",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
    },
    "images": [
        "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/1.webp",
        "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/2.webp",
        "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/3.webp",
        "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/4.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/thumbnail.webp"
}
