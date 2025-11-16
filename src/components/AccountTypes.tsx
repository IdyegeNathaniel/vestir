import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Personal from "@/components/assets/Images/Personal.png";
import Couple from "@/components/assets/Images/Vendor.png";
import { Button } from "@mui/material";

const AccountTypes = () => {
  return (
    <Box component="div">
      <Box
        sx={{
          display: "flex",
          flexDirection: {xs: "column", md: "row"},
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {xs: "row", md: "column"},
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: 5,
            backgroundColor: "#f6f4ecff",
            padding: "12px",
            cursor: "pointer",
            "&:hover": {
                border: "1px solid #e4c643ff "
            }
          }}
        >
          <Image src={Personal} width={250} height={250} alt="image" style={{ marginBottom: "10px" }} />
          <Typography variant="h5">Personal account</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {xs: "row", md: "column"},
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: 5,
            backgroundColor: "#f6f4ecff",
            padding: "12px",
            cursor: "pointer",
            "&:hover": {
                border: "1px solid #e4c643ff "
            }
          }}
        >
          <Image src={Couple} width={250} height={250} alt="image" style={{ marginBottom: "10px" }} />
          <Typography variant="h5">Duo account</Typography>
        </Box>

      </Box>
    </Box>
  );
};

export default AccountTypes;
