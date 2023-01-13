import { useState, useRef, useEffect } from "react";
import { Toolbar } from "./toolbar";
import { Footer } from "./footer";
import {
  Contracts,
  AboutUs,
  Investment,
  LandingPage,
  NewsPage,
} from "../pages";
import { Tooltip } from "@mui/material";
import { SupportAgent } from "@mui/icons-material";
import { hoverButtons } from "../data/layout";
import useToken from "../../../hooks/useToken";

export default function Landingpage(props) {
  const [path, setPath] = useState();
  const [token, setToken] = useToken();

  const hoverButton = useRef();

  const handelAnimation = () => {
    hoverButton.current.classList.toggle("!scale-100");
  };

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
    <>
      <div className="overflow-x-hidden">
        <Toolbar
          setLoggedUser={(data) => {
            props.setLoggedUser({ ...data });
          }}
          setToken={setToken}
          navigate={setPath}
        ></Toolbar>
        {component}
        <Footer></Footer>
      </div>
      <button
        onClick={handelAnimation}
        className="bg-gray-800 w-16 h-16 rounded-full fixed bottom-12 right-12 z-10 hover:bg-gray-900 hover:-translate-y-3 transition-all"
      >
        <SupportAgent className="text-gray-200" fontSize="large"></SupportAgent>
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
      </div>
    </>
  );
}
