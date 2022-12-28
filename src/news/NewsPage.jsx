import React from "react";
import "./newspage.css";

import { Divider } from "@mui/material";

import woman from "./../images/woman.jpg";
import goldplate from "./../images/plateofgold.jpg";
import ringBox from "./../images/ringBox.jpg";
import threeRings from "./../images/threeRings.jpeg";
import gold from "./../images/gold.jpeg";
import goldPrice from "./../images/goldPrice.jpg";

export default function NewsPage() {
  const newsContent = [
    {
      title: "Indian Gold",
      text: "On November 12, 2022, the price of gold in India for both 22 and 24 carats have been increased significantly. 10 gram of 24 carat gold priced Rs 52,580 in India, while 10 grams of 22 carat gold cost Rs 48,200.",
      image: woman,
    },
    {
      title: "Gold price prediction",
      text: "According to the latest long-term forecast, gold price will hit $2,000 by the end of 2023 and then $2,500 by the middle of 2028. Gold will rise to $3,000 within the year 2030, $3,500 in 2032 and $4,000 in 2034.",
      image: goldplate,
    },
    {
      title: "world economy at TRT World Forum",
      text: "Experts discuss world economy at TRT World Forum and especially they talk over the developing countries are going through some 'serious economic' challenges as the world faced COVID-19 pandemic, followed by Russia's war in Ukraine, and for Pakistan additionally the floods.",
      image: ringBox,
    },
    {
      title: "Gold colors in Iran",
      text: "Yellow Gold color is the most popular color used in jewelry showrooms across Iran. White Gold color is also commonly used in Iran jewelry stores. Roe Gold color is used in jewelry and Green Color is also available in jewelry shops in Iran.",
      image: threeRings,
    },
    {
      title: "Gold Importing",
      text: "According to Turkish government statistics, Iran has imported billions of dollars’ worth of gold from Turkey since it was ejected from the SWIFT international electronic banking system in March.",
      image: gold,
    },
    {
      title: "Gold dips",
      text: "The dollar index rose 0.3%. A stronger greenback makes dollar-priced bullion more expensive for overseas buyers.",
      image: goldPrice,
    },
  ];

  return (
    <div className="top-container">
      {newsContent.map((content, i) => {
        if (i % 2 === 0) {
          return (
            <>
              <div className="flex flex-col justify-between" key={i}>
                <div className="flex justify-between my-12 p-7">
                  <div className="w-1/3 mr-12 my-auto">
                    <img src={content.image} alt="pic" className="m-auto" />
                  </div>
                  <div className="text-left w-2/3 flex flex-col mt-auto mb-8">
                    <h1 className="title">{content.title}</h1>
                    <p className="body">{content.text}</p>
                  </div>
                </div>
              </div>
              <Divider className="bg-white"/>
            </>
          );
        } else {
          return (
            <>
            <div className="flex flex-col justify-between" key={i}>
              <div className="flex justify-between align-middle flex-row-reverse my-12 p-10">
                <div className="w-1/3 ml-12 my-auto">
                  <img src={content.image} alt="pic" className="my-auto" />
                </div>
                <div className="text-center w-2/3 flex flex-col mt-auto mb-8">
                  <h1 className="title">{content.title}</h1>
                  <p className="body">{content.text}</p>
                </div>
              </div>
            </div>
            <Divider className="bg-white"/>
            </>
          );
        }
      })}
    </div>
  );
}
