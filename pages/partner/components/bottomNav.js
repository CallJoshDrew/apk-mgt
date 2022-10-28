import React from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from "@mui/material/Paper";

export default function LabelBottomNavigation({page}) {
  const [value, setValue] = React.useState(page);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigation
        // showLabels uncomment this to show label
        value={value} onChange={handleChange}
      >
      <BottomNavigationAction
        label="Dashboard"
        value="dashboard"
        icon={<DashboardIcon />}
        href="/partner/dashboard" aria-hidden="false"
      />
      <BottomNavigationAction
        label="Notification"
        value="notification"
        icon={<NotificationsIcon />}
        href="/partner/allNotification"  aria-hidden="false"
      />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<AccountCircleIcon />}
        href="/partner/profile" aria-hidden="false"
      />
    </BottomNavigation>
    </Paper>
  );
}
