import React from "react";
import "../CSS/content.css"
import { Link } from "react-router-dom";

export default function content() {
    return (
        <div className="about-myPg-container">
            <div className="content">
                <h1 className='about-myPg-heading'>
                    About My PG
                </h1>
                <p className='about-para'>We, at  My PG, are India's fastest-growing network of managed Paying Guest (PG) rentals. We hope to provide you with the best renting solutions with the help of our designs and technology.Our services across the country will help you find and book Paying Guest (PG) rental homes.</p>
                <Link className='link-item' to="/about">
                    <button className='read-more-btn'>Read More</button>
                </Link>
            </div>
            <div className="content-img">
                <img src="https://bookmypg.co.in/assets/front/images/about.png" alt="" />
            </div>
        </div>
    )
}