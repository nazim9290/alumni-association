import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreateIcon from "@mui/icons-material/Create";
import EventNoteIcon from "@mui/icons-material/EventNote";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from "@mui/icons-material/Logout";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "./../../Hooks/useAuth";


const DashboardRoute = () => {
  const { logout, user, admin } = useAuth();
  const icons = [<HomeIcon/>,<AccountCircleIcon />, <CreateIcon />, <LogoutIcon />];
  const route = ["Home","Profile", "Blog Write", "Log Out"];
  const adminicons = [
    <SupervisorAccountIcon />,
    <EventNoteIcon />,
    <GroupAddIcon />,
  ];
  const adminRoute = ["Make Admin", "Add Event", " Add Committee"];
  return (
    <div>
      {/* for admin only  */}
      {user.email && admin && (
        <List>
          {["MakeAdmin", "addEvent", "addCommittee"].map((text, index) => (
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
          {["Home","", "BlogWrite", "Logout"].map((text, index) => (
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
