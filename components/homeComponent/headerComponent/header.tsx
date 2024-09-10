import Logo from "../../../public/media/static/logo.png";
import {
  AppBar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box display="flex" alignItems="center">
          <Image
            src={Logo}
            alt="RealEstate Logo"
            style={{
              height: "50px",
              objectFit: "contain",
              display: "inline-block",
            }}
          />
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          {["Dashboard", "Buy", "Rent", "Sell", "New"].map((item, index) => (
            <Link href={item} key={index}>
              <Typography color="inherit">{item}</Typography>
            </Link>
          ))}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
          variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            sx={{
              borderColor: "#f4511e",
              color: "#f4511e",
              "&:hover": {
                borderColor: "#d84315",
                backgroundColor: "rgba(244, 81, 30, 0.1)",
              },
            }}
          >
            Add Property
          </Button>

          <Box display="flex" alignItems="center" ml={2}>
            <Avatar alt="User Avatar" src="/path-to-user-avatar.jpg" />
            <IconButton color="inherit">
              <ArrowDropDownIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
