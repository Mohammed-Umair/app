import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../assets/logo.jpg";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Nav.css";

import { Divider, Drawer, List, ListItem } from "@mui/material";
import { navbarMenu } from "../../data/navbarData";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function NavBarHeader({ setSearch }) {
  const cartItems = useSelector((state) => state.BookReducer.cart);

  const [openMobileDrawer, setOpenMobileDrawer] = React.useState(false);
  const handleOpenDrawer = () => {
    setOpenMobileDrawer(true);
  };
  const HandleClose = () => {
    setOpenMobileDrawer(false);
  };
  return (
    <>
      <Box>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#3eecac",
            backgroundImage: "linear-gradient(19deg, #3eecac 0%, #ee74e1 100%)",
            
          }}
        >
          <Toolbar sx={{
            display:"flex",
            justifyContent:"space-around" ,
            alignItems:"center"
          }}>
            <Link to="/">
              <Typography
                variant="h6"
                noWrap
                className="logo-text"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Shop
              </Typography>
            </Link>
            <Box
              className="Nav-Bar-Menus"
              sx={{
                // flexGrow: 1,
                display: { xs: "none", md: "flex", },
              }}
            >
              {navbarMenu.slice(0,4).map((menu) => {
                return (
                  <a key={menu.id} href={menu.path}>
                    {menu.title}
                  </a>
                );
              })}
            </Box>

            <Box
              sx={{
                // flexGrow: 1,
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                <MenuIcon onClick={handleOpenDrawer} />
              </IconButton>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search…"
                  
                />
              </Search>
              <Link to="/cart">
                <IconButton
                  size="large"
                  edge="start"
                  aria-label="open drawer"
                  sx={{
                    ml: 1,
                    color: "#fff",
                  }}
                >
                  <AddShoppingCartIcon />
                  <Typography variant="subtitle1">
                    {cartItems.length}
                  </Typography>
                </IconButton>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer
        anchor="right"
        open={openMobileDrawer}
        onClose={HandleClose}
        sx={{
          "& .MuiPaper-root ": {
            // width: "100%",x
          },
        }}
      >
        <Box
          sx={{ p: 5, widht: "70%", overflowY: "hidden" }}
          className="mobile-drawer-box"
        >
          <Box onClick={HandleClose} className="mobile-drawer-closeIcon">
            <CloseIcon
              onClick={HandleClose}
              sx={{
                fontSize: "30px",
              }}
            />
          </Box>
          <List>
            {navbarMenu.map((menu) => {
              return (
                <ListItem key={menu.id} className="mobile-drawer-listitem">
                  <a href={menu.path}>{menu.title}</a>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
