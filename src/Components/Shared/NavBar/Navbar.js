import AddIcCallRoundedIcon from "@mui/icons-material/AddIcCallRounded";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../img/logo.png";
import useAuth from "../../Hooks/useAuth";
import "./Navbar.css";

const pages = ["Home", "About", "Events", "Committee", "Blog", "Member"];
const settings = ["Dashboard"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, logout } = useAuth();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div className="navbar">
      <div className="title-name">
        <Box
          sx={{
            display: "flex",
            p: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ flexGrow: 1, mr: 2 }}>
            ❀๑▬▬๑﷽๑▬▬๑❀ <br /> হাজী মাদবর আলী হাচানিয়া দাখিল মাদ্রাসা প্রাক্তন
            ছাত্র ছাত্রী পরিষদ
          </Box>
          <a href="tel:01984467364">
            <AddIcCallRoundedIcon sx={{ mr: 1 }} color="primary" />
          </a>
          <a
            href="https://www.facebook.com/groups/hasania.alumni.association/"
            target="_blank"
          >
            <FacebookOutlinedIcon color="primary" />
          </a>
        </Box>
        <span></span>
      </div>
      <AppBar
        position="static"
        className="app-bar"
        title={<img src={logo} alt="" />}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              className="logo"
              variant="div"
              noWrap
              component="div"
              color="inherit"
              sx={{ mr: 10, ml: 5, display: { xs: "none", md: "flex" } }}
            >
              <img src={logo} alt="" width="50" />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                className="menu-item"
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link to={`/${page}`}>{page}</Link>
                  </MenuItem>
                ))}
                <Link onClick={handleCloseNavMenu} to="/becomeMember">
                  Be Come a Member
                </Link>
              </Menu>
            </Box>

            {/* responsive screen size */}

            <Typography
              variant="h6"
              className="res-logo"
              noWrap
              component="div"
              sx={{ flexGrow: 0, mr: 10, display: { xs: "flex", md: "none" } }}
            >
              <img src={logo} alt="" width="60" />
            </Typography>
            <Box
              className="top-menu"
              textalign="center"
              sx={{
                flexGrow: "1",
                mx: 10,
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <Link key={page} to={`/${page}`}>
                  {page}
                </Link>
              ))}
              <Link to="/becomeMember">Be Come a Member</Link>
            </Box>
            {user?.email ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar sx={{ width: 50, height: 50 }}>
                      {user.photoURL === null ? (
                        `${user.displayName.split(" ")[0][0]}${
                          user.displayName.split(" ")[1][0]
                        }`
                      ) : (
                        <img src={user?.photoURL} alt="" />
                      )}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      className="menu-item"
                      key={setting}
                      onClick={handleCloseNavMenu}
                    >
                      <NavLink to={`/${setting}`} textalign="center">
                        {setting}
                      </NavLink>
                    </MenuItem>
                  ))}
                  <Typography
                    className="menu-item"
                    sx={{ cursor: "pointer", textAlign: "center" }}
                    onClick={logout}
                  >
                    Logout
                  </Typography>
                </Menu>
              </Box>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default NavBar;
