import React, { useState } from "react";
import "../CSS/PgDetails.css";
import "../CSS/PgDetailsAtFrame.css";
import ImgageSlider from "./ImageSlider";
import api from "./API";
import tiffinApi from "./TifffinApi";
import SignUp from "./Signup";
import SignIn from "./SignIn";

export default function PgDetailsAtFrame() {
    const [showTiffinFrame, setShowTiffinFrame] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);

    const toggleTiffinFrame = () => {
        setShowTiffinFrame(!showTiffinFrame);
    };

    const toggleSignUp = () => {
        setShowSignUp(!showSignUp);
        setShowSignIn(false); // Close sign in frame if it's open
    };

    const toggleSignIn = () => {
        setShowSignIn(!showSignIn);
        setShowSignUp(false); // Close sign up frame if it's open
    };

    return (
        <div className="d-container">
            <div className="pg-details-section-1">
                <div className="pg-photos">
                    <ImgageSlider images={api[0].images} />
                </div>
            </div>
            <div className="pg-details-section-2">
                <div className="address-info">
                    <h2 className="sub-address">{api[0].subAddress}</h2>
                    <p className="full-address">{api[0].Address}</p>
                </div>
                <div className="pg-price-section">
                    <div className="deposit-section">
                        <p className="deposit-price para-1">{api[0].Deposit} /-</p>
                        <p className="deposit-text para-2">Deposit</p>
                    </div>
                    <div className="room-dtl-section">
                        <p className="room-info-text para-1">{api[0].RoomType}</p>
                        <p className="room-type-text para-2">Room Type Available</p>
                    </div>
                    <div className="rent-info-section">
                        <p className="rent-price para-1">{api[0].RPM} /-</p>
                        <p className="rent-info-text para-2">Rent/month</p>
                    </div>
                </div>
                <hr />
                <div className="pg-information">
                    <div className="pg-available-services">
                        <div className="info-section-1">
                            <div className="info-section-11">
                                <div className="logo-svg">
                                    <img src="/user-regular.svg" alt="" />
                                </div>
                                <div className="details-1">
                                    <p className="para-1 d1">{api[0].PreferredTenaments}</p>
                                    <p className="para-2 d2">Preferred Tenaments</p>
                                </div>
                            </div>
                            <div className="info-section-12 ">
                                <div className="logo-svg">
                                    <img src="/calendar-days-solid.svg" alt="" />
                                </div>
                                <div className="details-1">
                                    <p className="para-1 d1">{api[0].PostOn}</p>
                                    <p className="para-2 d2">Posted On</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="info-section-2">
                            <div className="info-section-11">
                                <div className="logo-svg">
                                    <img src="/utensils-solid.svg" alt="" />
                                </div>
                                <div className="details-1">
                                    <p className="para-1 d1">{api[0].FF}</p>
                                    <p className="para-2 d2">Food Facility</p>
                                </div>
                            </div>
                            <div className="info-section-12 ">
                                <div className="logo-svg">
                                    <img src="/clock-regular.svg" alt="" />
                                </div>
                                <div className="details-1">
                                    <p className="para-1 d1">{api[0].GateClosingTime}</p>
                                    <p className="para-2 d2">Gate Closing Time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tiffin-services-btn ">
                        <div className="logo-svg">
                            <img src="https://cdn-icons-png.flaticon.com/512/1019/1019782.png" alt="" />
                        </div>
                        <div className="details-1">
                            <p className="para-1 d1">Tiffin Service</p>
                            <p className="psra-2 d2">Nearby Available</p>
                        </div>
                    </div>
                    <button className="owner-btn" onClick={toggleSignIn}>Get Owner Details</button>
                    <button className="ts-btn" onClick={toggleTiffinFrame}> Tiffin services</button>
                </div>
            </div>

            {/* Tiffin Services Frame */}
            {showTiffinFrame && (
                <div className="tiffin-frame">
                    <h2>Tiffin Services</h2>
                    <div className="all-list">
                        {tiffinApi.map((service) => (
                            <div key={service.id} className="tiffin-list">
                                <div className="tiffin-info">
                                    <img src={service.url} alt={service.name} />
                                    <div className="details">
                                        <h4>{service.name}</h4>
                                        <p>{service.address}</p>
                                        <a href={service.location} target="_blank" rel="noopener noreferrer">Visit</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="cancle-btn" onClick={toggleTiffinFrame}>Cancel</button>
                </div>
            )}

            {/* Sign Up Frame */}
            {showSignUp && <SignUp onClose={toggleSignUp} />}

            {/* Sign In Frame */}
            {showSignIn && <SignIn onClose={toggleSignIn} onSignUpClick={toggleSignUp} />}

            <section className="jio-location-frame">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14685.982796473514!2d72.52020871355288!3d23.042281599869362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e832f450cca5f%3A0x3ca276447f899e08!2sKripal%20Homes%20PG!5e0!3m2!1sen!2sin!4v1714865438137!5m2!1sen!2sin" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </div>
    );
}
