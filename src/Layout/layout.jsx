import { useState } from "react";
import Auth from "../Auth/auth.jsx";
import LandingPage from "../landing-page/landing-page.jsx";
import NewsPage from "../news/NewsPage.jsx";
import Contracts from "../contacts/Contracts.jsx";
import Investment from "../investment/InvestmentPage.jsx";
import AboutUs from "../aboutUS/AboutUs.jsx";

import logo_sm from "../images/logo small.png";

import { Tooltip, IconButton } from "@mui/material";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TwitterIcon from "@mui/icons-material/Twitter";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";

function Toolbar(props) {
  const navButtons = [
    {
      name: "Home",
      path: "home",
      selected: true,
    },
    {
      name: "Gold News",
      path: "news",
    },
    {
      name: "Contracts",
      path: "contracts",
    },
    {
      name: "Investment",
      path: "investment",
    },
    {
      name: "About US",
      path: "about",
    },
  ];

  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState();

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

  return (
    <div
      className="w-full border-b-[.5px] border-gray-400 p-5 flex justify-between bg-transparent backdrop-blur-sm z-10 absolute top-0"
      id="top-navbar"
    >
      <img src={logo_sm} alt="" width={80}  className="relative bottom-2"/>
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
      component = <AboutUs></AboutUs>;
      break;
  }
  return (
    <>
      <Toolbar
        navigate={(path) => {
          setPath(path);
        }}
      ></Toolbar>
      {component}
      <Footer></Footer>
    </>
  );
}

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ behavior: "smooth", top: -9999 });
  };

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
          <TwitterIcon
            className="text-gray-200 self-center"
            fontSize="large"
          ></TwitterIcon>
        </div>
      </div>
    </div>
  );
}
