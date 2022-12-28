import React from "react";
import "./aboutUs.css";
import khalifa from "./../images/khalifa.jpg"

export default function AboutUs() {


    return(
        <div className="aboutus-container">
            <h1 className="about-title">About us</h1>
            <div className="about-content">
                
                <p className="about"> Welcome to gold robots !

                    We aim to offer our customers a variety of the latest robots . We’ve come a long way, so we know exactly which direction to take when supplying you with high quality yet budget-friendly products. We offer all of this while providing excellent customer service and friendly support.

                    We always keep an eye on the latest trends in robots and put our customers’ wishes first. That is why we have satisfied customers all over the world, and are thrilled to be a part of the robots industry.

                    The interests of our customers are always top priority for us, so we hope you will enjoy our products as much as we enjoy making them available to you.</p>
                
                <img className="khalifa-image" src={khalifa} alt="khalifa" />
            </div>
        </div>
    )
}