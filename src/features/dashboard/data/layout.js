import {
  AccountCircle,
  Dashboard,
  AccountBalanceOutlined,
  FeedOutlined,
  Settings,
} from "@mui/icons-material";

export const drawerButtons = [
  { name: "Profile", icon: <AccountCircle></AccountCircle>, path: "profile" },
  { name: "Dashboard", icon: <Dashboard></Dashboard>, path: "home" },
  {
    name: "Bank",
    icon: <AccountBalanceOutlined></AccountBalanceOutlined>,
    path: "bank",
  },
  {
    name: "Contracts",
    icon: <FeedOutlined></FeedOutlined>,
    path: "contracts",
  },
  {
    name: "Settings",
    icon: <Settings></Settings>,
    path: "settings",
  },
];
