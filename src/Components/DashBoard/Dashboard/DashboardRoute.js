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
  const { logout } = useAuth();
  const icons = [
    <AccountCircleIcon />,
    <CreateIcon />,
    <SupervisorAccountIcon />,
    <EventNoteIcon />,
    <LogoutIcon />,
  ];
  const route = ["Profile", "Blog Write", "Make Admin", "Add Event", "Log Out"];
  return (
    <div>
      <List>
        {["", "BlogWrite", "MakeAdmin", "addEvent", "Logout"].map(
          (text, index) => (
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
          )
        )}
      </List>
    </div>
  );
};

export default DashboardRoute;
