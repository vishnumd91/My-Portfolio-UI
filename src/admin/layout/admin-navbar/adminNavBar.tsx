import React, { ReactElement } from "react";
import profilePic from "../../../../public/assets/profile.jpg";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Typography,
  Badge,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles((theme) => ({
  textColor: {
    color: "#fff",
  },
  toolBar: {
    backgroundColor: "#1976d2",
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    marginLeft: "auto",
    marginRight: theme.spacing(3),
  },
}));

export const AdminNavBar = (): ReactElement => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolBar}>
        <Typography variant="h6" component="span" className={classes.textColor}>
          Portfolio Admin
        </Typography>
        <IconButton
          aria-label="show 17 new notifications"
          color="inherit"
          className={classes.icon}
        >
          <Badge badgeContent={17} color="secondary" overlap="rectangular">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Typography variant="h6" component="span" className={classes.textColor}>
          <Avatar alt="Vishnu M D" src={profilePic} />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavBar;
