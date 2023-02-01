import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "@mui/material";
import "@fontsource/akaya-kanadaka";

const pages = ["Home", "Stations"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      color="primary"
      sx={{
        borderBottom: 2,
        borderBottomColor: "#e21f25",
        boxShadow: 10,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DirectionsBikeIcon
            sx={{
              display: { xs: "none", md: "flex" },
              fontSize: 60,
              mr: 5,
            }}
          />
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "Akaya Kanadaka",
              fontWeight: 900,
              letterSpacing: ".4rem",
              color: "#e21f25",
              textDecoration: "underline",
              textShadow: 20,
            }}
          >
            CityBikes
          </Typography>
          <DirectionsBikeIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 900,
              letterSpacing: ".7rem",
              color: "#e21f25",
              textDecoration: "none",
            }}
          >
            BikeApp
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, mr: 10, color: "#e21f25", display: "block" }}
            >
              <Link href="/" color="#e21f25" underline="none">
                <Typography
                  textAlign="center"
                  sx={{ fontFamily: "Combo", fontWeight: 700, fontSize: 20 }}
                >
                  Home
                </Typography>
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, mr: 10, color: "#fcbc19", display: "block" }}
            >
              <Link href="/stations" color="#e21f25" underline="none">
                <Typography
                  textAlign="center"
                  sx={{ fontFamily: "Combo", fontWeight: 700, fontSize: 20 }}
                >
                  Stations
                </Typography>
              </Link>
            </Button>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/" color="#e21f25" underline="none">
                  <Typography textAlign="center">Home</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/stations" color="#e21f25" underline="none">
                  <Typography textAlign="center">Stations</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
