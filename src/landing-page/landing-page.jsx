import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { Card, CardMedia, CardContent, Typography } from "@mui/material";

import "./landing-page.css";

import logo from "../images/logo.png";
import zlato from "../images/zlato.jpg";
import stribro from "../images/stribro.jpg";
import kovy from "../images/strategické kovy.jpg";

export default function LandingPage() {
  return (
    <>
      <Header></Header>
      <Golds id="golds"></Golds>
      <Dollars id="dollars"></Dollars>
    </>
  );
}

function Header() {
  const scrollToBottom = () => {
    window.scrollTo({ behavior: "smooth", top: 99999 });
  };

  return (
    <div className="w-full h-[100vh] header-background flex justify-center flex-col">
      <div className="font-bold flex flex-col w-[700px] mx-auto mt-auto">
        <img src={logo} alt="" width={300} className="self-center" />
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
          onClick={scrollToBottom}
        ></KeyboardArrowDownIcon>
      </button>
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

function Golds() {
  const Cards = [
    {
      name: "zlato",
      Image: zlato,
      description: "lorem ipsum",
    },
    {
      name: "stribro",
      Image: stribro,
      description: "lorem ipsum",
    },
    {
      name: "strategické kovy",
      Image: kovy,
      description: "lorem ipsum",
    },
  ];

  return (
    <div className="w-full h-[30vw] flex flex-col">
      <div className="flex flex-col align-middle">
        <p className="mt-3 text-[2rem] text-slate-500">Types of Gold</p>
        <div className="w-[300px] h-[1px] bg-slate-400 self-center mt-5"></div>
        <div className="flex justify-around w-full p-5">
          {Cards.map((card, i) => {
            return (
              <Card key={i} sx={{ maxHeight: 345 }}>
                <CardMedia
                  sx={{ height: 145, width: 300 }}
                  image={card.Image}
                />
                <CardContent>
                  <Typography component="div" variant="h5">
                    {card.name}
                  </Typography>
                  <Typography color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}