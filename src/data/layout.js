import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

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
