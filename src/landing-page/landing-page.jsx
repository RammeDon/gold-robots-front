import { render } from "@testing-library/react";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import "./landing-page.css";

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="w-[100vw]">
        <Toolbar></Toolbar>
        <Header></Header>
        <Dollars></Dollars>
        <Reviwes></Reviwes>
      </div>
    );
  }
}

function Header() {
  return (
    <div className="w-full h-[100vh] header-background flex justify-center flex-col">
      <div className="font-bold flex flex-col w-[700px] mx-auto mt-auto">
        <span className="font-bold text-[5rem] text-white">LOGO</span>
        <div className="w-full h-[1px] bg-gray-400"></div>
        <span className="font-semibold text-white text-[2rem]">
          We design all in one tech solution for the complex needs of the{" "}
          <b>capital management</b> industry.
        </span>
      </div>
      <button className="header-btn mx-auto mt-auto relative bottom-12">
        <KeyboardArrowDownIcon
          className="-rotate-45 font-lg"
          fontSize="large"
        ></KeyboardArrowDownIcon>
      </button>
    </div>
  );
}

function Toolbar() {
  const navButtons = [
    {
      name: "Home",
      path: "home",
      selected: true,
    },
    {
      name: "Services",
      path: "servics",
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
  return (
    <div className="w-full border-b-[.5px] border-gray-400 p-5 flex justify-between bg-transparent backdrop-blur-sm z-10 absolute top-0">
      <span className="text-3xl text-gray-600">LOGO</span>
      <div className="flex justify-around w-2/3 flex-row-reverse px-10">
        <Tooltip title="login/register">
          <IconButton>
            <LoginSharpIcon className="text-gray-300"></LoginSharpIcon>
          </IconButton>
        </Tooltip>
        {navButtons.map((button, i) => {
          return (
            <button
              className={button.selected ? "nav-btn-selected" : "nav-btn"}
              onClick={navClick}
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

function Dollars() {
  return (
    <div className="flex flex-col w-full dollars h-[100vh] justify-center">
      <h1 className="font-bold text-[3rem] text-white mb-5">
        Weakness of the U.S. Dollar
      </h1>
      <div className="bg-white w-1/2 self-center h-[1px]"></div>
      <p className="text-white self-center w-1/2 text-[1.5rem] ">
        Although the U.S. dollar is one of the world’s most important reserve
        currencies, when the value of the dollar falls against other currencies
        as it did between 1998 and 2008, this often prompts people to flock to
        the security of gold, which raises gold prices . The price of gold
        nearly tripled between 1998 and 2008, reaching the $1,000-an-ounce
        milestone in early 2008 and nearly doubling between 2008 and 2012,
        hitting above the $2,000 mark.1 The decline in the U.S. dollar occurred
        for a number of reasons, including the country’s large budget and trade
        deficits and a large increase in the money supply.
      </p>
    </div>
  );
}

function Reviwes() {
  return <div className="w-full h-[100vh] reviews"></div>;
}

function Footer() {
  return (
    <div className="w-full bg-gray-700 h-[300px] flex flex-col">
      <div className="w-full h-1/2 bg-slate-200"></div>
      <div className="w-full h-1/2 flex justify-around align-middle">
        <div className="flex flex-col w-1/3">
          <p className="text-sm text-gray-200">
            © 2022 All Rights Reserved Goldrobots
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
