import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Avatar } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

///links in side bar

const fristArray = [
  { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
  { text: "Manage Team", icon: <PeopleOutlinedIcon />, path: "/team" },
  {
    text: "Contacts Information",
    icon: <ContactsOutlinedIcon />,
    path: "/contacts",
  },
  {
    text: "Invoices Balances",
    icon: <ReceiptOutlinedIcon />,
    path: "/invoices",
  },
];

const secondArray = [
  { text: "Profile Form", icon: <PersonOutlinedIcon />, path: "/form" },
  { text: "Calendar", icon: <CalendarTodayOutlinedIcon />, path: "/calendar" },
  {
    text: "FAQ Page",
    icon: <HelpOutlineOutlinedIcon />,
    path: "/faq",
  },
];

const thirdArray = [
  { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
  { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
  { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/line" },
  { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "/geography" },
];

const SideBarCompo = ({ handleDrawerClose, open, DrawerHeader }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  //// navigate function

  const navigateFunction = (path) => {
    navigate(path);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List sx={{ pb: 0 }}>
        <ListItem
          sx={{
            padding: 0,
          }}
        >
          <Avatar
            alt="fatima mohamed"
            src="https://lawoffice.org.il/wp-content/uploads/2020/09/dome-rock-al-aqsa-mosque-islamic-shrine-located-temple-mount-jerusalem-israel-300x207.jpg"
            sx={{
              border: `2px solid ${
                theme.palette.mode === "dark" ? grey[500] : grey[600]
              }`,

              width: open ? 88 : 44,
              height: open ? 88 : 44,
              margin: "auto",
              transition: "0.25s",
            }}
          />
        </ListItem>
        <ListItem
          sx={{
            justifyContent: "center",
            textTransform: "capitalize",
            pb: 0,
            fontSize: open ? 17 : 0,
            transition: "0.25s",
          }}
        >
          alqds lana
        </ListItem>
        <ListItem
          sx={{
            justifyContent: "center",
            textTransform: "capitalize",
            p: 0,
            color: theme.palette.primary.main,
            fontSize: open ? 17 : 0,
            transition: "0.25s",
          }}
        >
          admin
        </ListItem>
      </List>
      <Divider />
      <List>
        {fristArray.map((prod) => (
          <ListItem
            key={prod.path}
            disablePadding
            sx={{
              bgcolor:
                location.pathname === prod.path
                  ? theme.palette.mode === "dark"
                    ? grey[800]
                    : grey[300]
                  : "",
              display: "block",
            }}
            onClick={() => navigateFunction(prod.path)}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {prod.icon}
              </ListItemIcon>
              <ListItemText
                primary={prod.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {secondArray.map((prod) => (
          <ListItem
            key={prod.path}
            disablePadding
            sx={{
              bgcolor:
                location.pathname === prod.path
                  ? theme.palette.mode === "dark"
                    ? grey[800]
                    : grey[300]
                  : "",
              display: "block",
            }}
            onClick={() => navigateFunction(prod.path)}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {prod.icon}
              </ListItemIcon>
              <ListItemText
                primary={prod.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {thirdArray.map((prod) => (
          <ListItem
            key={prod.path}
            disablePadding
            sx={{
              bgcolor:
                location.pathname === prod.path
                  ? theme.palette.mode === "dark"
                    ? grey[800]
                    : grey[300]
                  : "",
              display: "block",
            }}
            onClick={() => navigateFunction(prod.path)}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {prod.icon}
              </ListItemIcon>
              <ListItemText
                primary={prod.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBarCompo;
