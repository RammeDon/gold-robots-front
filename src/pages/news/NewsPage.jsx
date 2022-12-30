import React from "react";
import "./newspage.css";
import { newsContent } from "../../data/news";
import { Divider } from "@mui/material";



export default function NewsPage() {
  

  if (window.innerWidth > 420) {
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
                <Divider className="bg-white" />
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
                <Divider className="bg-white" />
              </>
            );
          }
        })}
      </div>
    );
  } else {
    return (
      <div className="top-container">
        {newsContent.map((content, i) => {
          return (
            <>
              <div className="flex flex-col justify-between" key={i}>
                <div className="flex justify-between align-middle flex-col my-12 p-7">
                  <div className="my-auto self-center">
                    <img src={content.image} alt="pic" />
                  </div>
                  <div className="text-left flex flex-col mt-auto mb-8 self-center">
                    <h1 className="title">{content.title}</h1>
                    <p className="body">{content.text}</p>
                  </div>
                </div>
              </div>
              <Divider className="bg-white" />
            </>
          );
        })}
      </div>
    );
  }
}
