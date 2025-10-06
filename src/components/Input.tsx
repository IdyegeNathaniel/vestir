import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export const Input: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, '& MuiBox-root': { border: 1, borderColor: 'divider' } }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, }}>
        <SearchOutlinedIcon sx={{ color: "#163832" }} />
        <TextField placeholder="Search" size="small" fullWidth sx={{ border: 'none',  "& .Mui-selected": { outline: 'none', border: 0 } }} />
      </Box>
    </Box>
  );
};
