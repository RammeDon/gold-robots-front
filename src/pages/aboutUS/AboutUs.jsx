import React from "react";
import "./aboutUs.css";
import khalifa from "../../assets/images/khalifa.jpg";

export default function AboutUs() {
  if (window.innerWidth > 420) {
    return (
      <div className="aboutus-container">
        <div className="flex pt-32 px-10 justify-between align-middle">
          <div className="flex flex-col justify-around w-1/2">
            <h1 className="about-title self-center mr-20">About us</h1>
            <div className="about-content">
              <p className="text-left text-lg mr-10">
                {" "}
                Welcome to gold robots ! We aim to offer our customers a variety
                of the latest robots . We’ve come a long way, so we know exactly
                which direction to take when supplying you with high quality yet
                budget-friendly products. We offer all of this while providing
                excellent customer service and friendly support. We always keep
                an eye on the latest trends in robots and put our customers’
                wishes first. That is why we have satisfied customers all over
                the world, and are thrilled to be a part of the robots industry.
                The interests of our customers are always top priority for us,
                so we hope you will enjoy our products as much as we enjoy
                making them available to you.
              </p>
            </div>
          </div>
          <img
            className="h-full m-auto"
            width={300}
            src={khalifa}
            alt="khalifa"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="aboutus-container">
        <div className="flex flex-col pt-20 px-10 justify-around align-middle">
          <p className="text-[3rem] font-serif self-center mb-8">About us</p>
          <img
            className="h-full m-auto"
            width={300}
            src={khalifa}
            alt="khalifa"
          />
          <div className="about-content my-5 px-5">
            <p className="text-left text-lg">
              {" "}
              Welcome to gold robots ! We aim to offer our customers a variety
              of the latest robots . We’ve come a long way, so we know exactly
              which direction to take when supplying you with high quality yet
              budget-friendly products. We offer all of this while providing
              excellent customer service and friendly support. We always keep an
              eye on the latest trends in robots and put our customers’ wishes
              first. That is why we have satisfied customers all over the world,
              and are thrilled to be a part of the robots industry. The
              interests of our customers are always top priority for us, so we
              hope you will enjoy our products as much as we enjoy making them
              available to you.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
