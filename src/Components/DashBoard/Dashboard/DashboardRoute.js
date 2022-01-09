import React from "react";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreateIcon from "@mui/icons-material/Create";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LogoutIcon from "@mui/icons-material/Logout";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import useAuth from "./../../Hooks/useAuth";

const DashboardRoute = () => {
  const { logout, user, admin } = useAuth();
  const icons = [<AccountCircleIcon />, <CreateIcon />, <LogoutIcon />];
  const route = ["Profile", "Blog Write", "Log Out"];
  const adminicons = [<SupervisorAccountIcon />, <EventNoteIcon />];
  const adminRoute = ["Make Admin", "Add Event"];
  return (
    <div>
      {/* for admin only  */}
      {user.email && admin && (
        <List>
          {["MakeAdmin", "addEvent"].map((text, index) => (
            <Box key={index}>
              <NavLink to={text}>
                <ListItem button>
                  {" "}
                  <ListItemIcon>{adminicons[index]}</ListItemIcon>
                  <ListItemText primary={adminRoute[index]} />
                </ListItem>
              </NavLink>
            </Box>
          ))}
        </List>
      )}
      {/* for all user  */}
      {user.email && (
        <List>
          {["", "BlogWrite", "Logout"].map((text, index) => (
            <Box key={index}>
              {text === "Logout" ? (
                <ListItem onClick={logout} button>
                  <ListItemIcon>{icons[index]}</ListItemIcon>
                  <ListItemText primary={route[index]} />
                </ListItem>
              ) : (
                <NavLink to={text}>
                  <ListItem button>
                    {" "}
                    <ListItemIcon>{icons[index]}</ListItemIcon>
                    <ListItemText primary={route[index]} />
                  </ListItem>
                </NavLink>
              )}
            </Box>
          ))}
        </List>
      )}
    </div>
  );
};

export default DashboardRoute;
