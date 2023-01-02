import { useState, useRef, useEffect } from "react";
import LandingPage from "../pages/landing-page/landing-page";
import NewsPage from "../pages/news/NewsPage.jsx";
import Contracts from "../pages/contacts/Contracts.jsx";
import Investment from "../pages/investment/InvestmentPage.jsx";
import AboutUs from "../pages/aboutUS/AboutUs.jsx";
import { Footer } from "./footer";
import { Toolbar, DashboardToolbar } from "./toolbar";
import { Tooltip, cardActionAreaClasses } from "@mui/material";
import { SupportAgent } from "@mui/icons-material";
import { hoverButtons } from "../data/layout";
import useToken from "../token/useToken";
import AdminPanel from "../pages/adminPage/AdminPanel.jsx";
import { DashboardHome } from "../pages/dashboard/dashboard";

export default function Body() {
  const [path, setPath] = useState("home");
  const { token, setToken } = useToken();

  const hoverButton = useRef();

  const handelAnimation = () => {
    hoverButton.current.classList.toggle("!scale-100");
  };

  let component;

  if (!token) {
    // switch (path) {
    //   default:
    //     component = <LandingPage />;
    //     break;
    //   case "home":
    //     component = <LandingPage />;
    //     break;
    //   case "news":
    //     component = <NewsPage />;
    //     break;
    //   case "contracts":
    //     component = <Contracts />;
    //     break;
    //   case "investment":
    //     component = <Investment />;
    //     break;
    //   case "about":
    //     component = <AboutUs />;
    //     break;
    // }
    switch (path) {
      default:
        component = <DashboardHome></DashboardHome>;
        break;
      case "home":
        component = <DashboardHome></DashboardHome>;
        break;
      case "profile":
        component = <p>profile</p>;
        break;
      case "mail":
        component = <p>contact us</p>;
        break;
      case "bank":
        component = <p>bank</p>;
        break;
      case "contracts":
        component = <div>contracts</div>;
        break;
      case "settings":
        component = <p>settings</p>;
        break;
    }
  } else {
  }

  if (!token) {
    return (
      /* <div className="overflow-x-hidden">
        <Toolbar
          setToken={setToken}
          navigate={(path) => {
            setPath(path);
          }}
        ></Toolbar>
        {component}
        <Footer></Footer>
      </div>
      <button
        onClick={handelAnimation}
        className="bg-gray-800 w-16 h-16 rounded-full fixed bottom-12 right-12 z-10 hover:bg-gray-900 hover:-translate-y-3 transition-all"
      >
        <SupportAgent
          className="text-gray-200"
          fontSize="large"
        ></SupportAgent>
      </button>
      <div
        className="flex flex-col justify-between w-min h-[200px] scale-0 fixed bottom-32 right-[3.6rem] align-middle transition-transform"
        ref={hoverButton}
      >
        {hoverButtons.map((button) => {
          return (
            <Tooltip title={button.name}>
              <button
                className="w-12 h-12 rounded-full text-gray-200 bg-gray-900 self-center"
                onClick={button.onClick}
              >
                {button.icon}
              </button>
            </Tooltip>
          );
        })}
      </div> */
      <>
        <DashboardToolbar setPath={(path)=>{setPath(path)}} path={path}></DashboardToolbar>
        <div className="bg-[#0b0f19] min-h-[100vh] max-h-max pt-12 text-white">
          {component}
        </div>
      </>
    );
  } else {
    return;
  }
}
