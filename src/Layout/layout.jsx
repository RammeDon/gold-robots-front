import { useState } from "react";
import Auth from "../Auth/auth.jsx";
import LandingPage from "../landing-page/landing-page.jsx";
import NewsPage from "../news/NewsPage.jsx";
import Contracts from "../contacts/Contracts.jsx";
import Investment from "../investment/InvestmentPage.jsx";
import AboutUs from "../aboutUS/AboutUs.jsx";

import logo_sm from "../images/logo small.png";

import {
  Tooltip,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  Box,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function Toolbar(props) {
  const navButtons = [
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

  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState();

  const [toggle, setToggle] = useState(false);

  const navClick = (event) => {
    if (selected) {
      selected.className = "nav-btn";
      event.target.className = "nav-btn-selected";
      setSelected(event.target);
    } else {
      navButtons[0].selected = false;
      event.target.className = "nav-btn-selected";
      setSelected(event.target);
    }
  };

  const openOnClick = () => {
    setOpen(true);
  };

  const toggleDrawer = (toggle) => {
    setToggle(toggle);
  };

  const DrawerTheme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          paperAnchorRight: {
            backgroundColor: "#081825",
            fontSize: "2rem",
            color: "#e5e7eb",
          },
        },
      },
    },
  });

  if (window.innerWidth > 420) {
    return (
      <div
        className="w-full border-b-[.5px] border-gray-400 p-5 flex justify-between bg-transparent backdrop-blur-sm z-10 absolute top-0"
        id="top-navbar"
      >
        <img src={logo_sm} alt="" width={80} className="relative bottom-2" />
        <div className="flex justify-around w-2/3 flex-row-reverse px-10">
          <Tooltip title="login/register">
            <IconButton onClick={openOnClick}>
              <LoginSharpIcon className="text-gray-300"></LoginSharpIcon>
            </IconButton>
          </Tooltip>
          <Auth
            open={open}
            setOpen={(value) => {
              setOpen(value);
            }}
          />
          {navButtons.map((button, i) => {
            return (
              <button
                className="nav-btn"
                onClick={(event) => {
                  props.navigate(button.path);
                  navClick(event);
                }}
                key={i}
              >
                <span className="mr-5">{button.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="w-full border-b-[.5px] border-gray-400 p-3 flex justify-between bg-transparent backdrop-blur-sm z-10 absolute top-0"
        id="top-navbar"
      >
        <img src={logo_sm} alt="" width={50} className="relative bottom-2" />
        <div className="flex justify-around w-1/4">
          <IconButton
            onClick={() => {
              toggleDrawer(true);
            }}
          >
            <MenuIcon className="text-white"></MenuIcon>
          </IconButton>
          <IconButton onClick={openOnClick}>
            <LoginSharpIcon className="text-white"></LoginSharpIcon>
          </IconButton>
        </div>
        <Auth
          open={open}
          setOpen={(value) => {
            setOpen(value);
          }}
        />
        <ThemeProvider theme={DrawerTheme}>
          <Drawer
            anchor="right"
            open={toggle}
            onClose={() => {
              toggleDrawer(false);
            }}
          >
            <Box
              role="presentation"
              onClick={() => {
                toggleDrawer(false);
              }}
            >
              <List className="flex flex-col">
                {navButtons.map((button, i) => (
                  <>
                    <ListItem key={i}>
                      <ListItemButton
                        onClick={() => {
                          props.navigate(button.path);
                        }}
                      >
                        <ListItemIcon>{button.icon}</ListItemIcon>
                        <ListItemText primary={button.name} />
                      </ListItemButton>
                    </ListItem>
                    <Divider className="bg-gray-400" />
                  </>
                ))}
              </List>
            </Box>
          </Drawer>
        </ThemeProvider>
      </div>
    );
  }
}

export default function Body() {
  const [path, setPath] = useState("home");

  let component;
  switch (path) {
    default:
      component = <LandingPage />;
      break;
    case "home":
      component = <LandingPage />;
      break;
    case "news":
      component = <NewsPage />;
      break;
    case "contracts":
      component = <Contracts />;
      break;
    case "investment":
      component = <Investment />;
      break;
    case "about":
      component = <AboutUs />;
      break;
  }

  return (
    <div className="overflow-x-hidden">
      <Toolbar
        navigate={(path) => {
          setPath(path);
        }}
      ></Toolbar>
      {component}
      <Footer></Footer>
    </div>
  );
}

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ behavior: "smooth", top: -9999 });
  };

  if (window.innerWidth > 420) {
    return (
      <div className="w-full bg-gray-800 h-[150px] flex flex-col">
        <div className="w-full h-full flex justify-around align-middle">
          <div className="flex flex-col w-1/3 justify-center">
            <p className="text-sm text-gray-300">
              © 2022 All Rights Reserved Goldrobots
            </p>
            <p className="text-gray-400">
              {" "}
              Mon-Fri 9:00AM - 5:00PM | No: 200, Floor: 25, Burj Khalifa Dubai,
              United Arab Emirate | +1-206-905-7657{" "}
            </p>
          </div>
          <div className="w-1/3 flex justify-center align-middle">
            <button className="header-btn self-center" onClick={scrollToTop}>
              <KeyboardArrowDownIcon className="up"></KeyboardArrowDownIcon>
            </button>
          </div>
          <div className="w-1/3 flex justify-around align-middle">
            <InstagramIcon
              className="text-gray-200 self-center"
              fontSize="large"
            ></InstagramIcon>
            <FacebookOutlinedIcon
              className="text-gray-200 self-center"
              fontSize="large"
            ></FacebookOutlinedIcon>
            <WhatsAppIcon
              className="text-gray-200 self-center"
              fontSize="large"
            ></WhatsAppIcon>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full bg-gray-800 flex flex-col">
        <div className="w-full h-full flex flex-col justify-center">
          <div className="flex justify-center align-middle my-5">
            <button className="header-btn self-center" onClick={scrollToTop}>
              <KeyboardArrowDownIcon className="up"></KeyboardArrowDownIcon>
            </button>
          </div>
          <div className="flex justify-around align-middle my-3">
            <InstagramIcon
              className="text-gray-200 self-center"
              fontSize="large"
            ></InstagramIcon>
            <FacebookOutlinedIcon
              className="text-gray-200 self-center"
              fontSize="large"
            ></FacebookOutlinedIcon>
            <WhatsAppIcon
              className="text-gray-200 self-center"
              fontSize="large"
            ></WhatsAppIcon>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-gray-400 text-[0.5rem]">
              {" "}
              Mon-Fri 9:00AM - 5:00PM | No: 200, Floor: 25, Burj Khalifa Dubai,
              United Arab Emirate | +1-206-905-7657{" "}
            </p>
            <p className="text-[0.8rem] text-gray-300">
              © 2022 All Rights Reserved Goldrobots
            </p>
          </div>
        </div>
      </div>
    );
  }
}
