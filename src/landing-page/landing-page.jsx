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
      <Reasoning></Reasoning>
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
    <div className="flex flex-col w-full dollars h-[100vh] justify-center sm:mt-20 lg:mt-0">
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
      name: "1. It's easy to buy, store and sell.",
      Image: zlato,
      description:
        "Gold can come in a physical form or it can be inserted into a retirement account like a 401(k) or IRA.",
    },
    {
      name: "2. It can help with inflation.",
      Image: stribro,
      description:
        "While gold's ability to battle inflation is inconsistent, with the right amount in your portfolio, it can potentially help and even act as a hedge against rising costs. ",
    },
    {
      name: "3. It can diversify your portfolio.",
      Image: kovy,
      description:
        "Gold can help diversify your portfolio. So, in the current market, your investments may be performing poorly but a small investment in gold could help offset the losses suffered elsewhere.",
    },
  ];

  return (
    <div className="w-full h-[370px] flex flex-col">
      <div className="flex flex-col align-middle">
        <p className="mt-3 text-[2rem] text-slate-500">
          Reasons to Invest in Gold
        </p>
        <div className="w-[300px] h-[1px] bg-slate-400 self-center mt-5"></div>
        <div className="flex justify-around w-full p-5">
          {Cards.map((card, i) => {
            return (
              <Card key={i} sx={{ maxHeight: 345 }}>
                <CardMedia sx={{ height: 145 }} image={card.Image} />
                <CardContent>
                  <Typography component="div" variant="h6">
                    {card.name}
                  </Typography>
                  <Typography color="text.secondary">
                    {card.description.slice(0, 50)}...
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

function Reasoning() {
  return (
    <>
      <p className="text-[3rem] font-semibold text-[#a17a2d]">Why Should You Invest In Gold.</p>
      <div className="reasoning w-full h-[700px] flex mt-22">
        <iframe
          width="800"
          height="494"
          src="https://www.youtube.com/embed/D-rMb9Znfn8"
          title="Why You Should Buy Gold and Silver - Robert Kiyosaki"
          frameborder="10"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="m-auto"
        ></iframe>
      </div>
    </>
  );
}
