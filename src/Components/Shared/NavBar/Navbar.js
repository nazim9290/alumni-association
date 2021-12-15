import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../../img/logo.png";
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AddIcCallRoundedIcon from "@mui/icons-material/AddIcCallRounded";
import "./Navbar.css";
import useAuth from "./../../Hooks/useAuth";

const pages = ["Home", "About", "Events", "Committee", "Blog", "Member"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user } = useAuth();

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
    <div>
      <div>
        <Box className="title-name">
          হাজী মাদবর আলী হাচানিয়া দাখিল মাদ্রাসা প্রাক্তন ছাত্র ছাত্রী পরিষদ
          <span>
            <AddIcCallRoundedIcon />
            <FacebookOutlinedIcon />
          </span>
        </Box>
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
              <img src={logo} alt="" width="80" />
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
              textAlign="center"
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
            {!user?.email ? (
              <Link to="/login">Login</Link>
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.displayName} src={user.photoURL} />
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
                    <MenuItem key={setting} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
