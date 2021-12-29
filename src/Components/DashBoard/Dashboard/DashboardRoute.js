import React from "react";
import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreateIcon from "@mui/icons-material/Create";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import LogoutIcon from "@mui/icons-material/Logout";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import useAuth from "./../../Hooks/useAuth";

const DashboardRoute = () => {
  const { logout } = useAuth();
  const icons = [
    <AccountCircleIcon />,
    <CreateIcon />,
    <SupervisorAccountIcon />,
    <LogoutIcon />,
  ];
  const route = ["Profile", "Blog Write", "Make Admin", "Log Out"];
  return (
    <div>
      <List>
        {["", "BlogWrite", "MakeAdmin", "Logout"].map((text, index) => (
          <Box>
            {text === "Logout" ? (
              <ListItem onClick={logout} button key={text}>
                <ListItemIcon>{icons[index]}</ListItemIcon>
                <ListItemText primary={route[index]} />
              </ListItem>
            ) : (
              <NavLink to={text}>
                <ListItem button key={text}>
                  {" "}
                  <ListItemIcon>{icons[index]}</ListItemIcon>
                  <ListItemText primary={route[index]} />
                </ListItem>
              </NavLink>
            )}
          </Box>
        ))}
      </List>
    </div>
  );
};

export default DashboardRoute;
