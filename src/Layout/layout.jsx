import { useState } from "react";
import LandingPage from "../pages/landing-page/landing-page";
import NewsPage from "../pages/news/NewsPage.jsx";
import Contracts from "../pages/contacts/Contracts.jsx";
import Investment from "../pages/investment/InvestmentPage.jsx";
import AboutUs from "../pages/aboutUS/AboutUs.jsx";
import { Footer } from "./footer";
import { Toolbar } from "./toolbar";


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
