import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  WhatsApp,
  EmailOutlined,
  LocalPhone,
  AccountCircle,
} from "@mui/icons-material";

export const navButtons = [
  {
    name: "Home",
    path: "home",
    selected: true,
    icon: <HomeOutlinedIcon className="text-gray-200"></HomeOutlinedIcon>,
  },
  {
    name: "Gold News",
    path: "news",
    icon: (
      <NewspaperOutlinedIcon className="text-gray-200"></NewspaperOutlinedIcon>
    ),
  },
  {
    name: "Contracts",
    path: "contracts",
    icon: <FeedOutlinedIcon className="text-gray-200"></FeedOutlinedIcon>,
  },
  {
    name: "Investment",
    path: "investment",
    icon: (
      <AccountBalanceOutlinedIcon className="text-gray-200"></AccountBalanceOutlinedIcon>
    ),
  },
  {
    name: "About US",
    path: "about",
    icon: <InfoOutlinedIcon className="text-gray-200"></InfoOutlinedIcon>,
  },
];

export const hoverButtons = [
  { name: "call", icon: <LocalPhone></LocalPhone>, onClick: () => {} },
  {
    name: "E-mail",
    icon: <EmailOutlined></EmailOutlined>,
    onClick: () => {},
  },
  {
    name: "whatsapp",
    icon: <WhatsApp></WhatsApp>,
    onClick: () => {
      window.open("https://wa.me/message/PKZ4I7ELXFTAH1");
    },
  },
];

export const dashboardButtons = [
  { name: "Profile", icon: <AccountCircle></AccountCircle>, path: "profile" },
  { name: "Dashboard", icon: <DashboardIcon></DashboardIcon>, path: "home" },
  {
    name: "Bank",
    icon: <AccountBalanceOutlinedIcon></AccountBalanceOutlinedIcon>,
    path: "bank",
  },
  {
    name: "Contracts",
    icon: <FeedOutlinedIcon></FeedOutlinedIcon>,
    path: "contracts",
  },
  {
    name: "Settings",
    icon: <SettingsIcon></SettingsIcon>,
    path: "settings",
  },
];
