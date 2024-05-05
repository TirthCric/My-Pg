import React from "react";
import "../CSS/PgDetails.css"
import ImgageSlider from "../Components/ImageSlider"
import {Link} from "react-router-dom";

export default function PgDetails(props) {
   
    return (
        <div className="pg-block">
            
            <Link to="/pgDetalisFrame" className="pg-address">
                <h2 className="small-add">{props.api.subAddress}</h2>
                <p className="address">{props.api.Address}</p>
            </Link>
            {/* <hr /> */}
            <div className="pg-details-sec-1">
                <div className="deposit">
                    <p className="deposit-price p1">{props.api.Deposit} /-</p>
                    <p className="deposit-text p2">Deposit</p>
                </div>
                <div className="room-dtl">
                    <p className="room-info-text p1">{props.api.RoomType}</p>
                    <p className="room-type-text p2">Room Type Available</p>
                </div>
                <div className="rent-info">
                    <p className="rent-price p1">{props.api.RPM} /-</p>
                    <p className="rent-info-text p2">Rent/month</p>
                </div>
            </div>
            <div className="pg-details-sec-2">
                <div className="pg-images">
                    <ImgageSlider
                     images = {props.api.images}
                     key = {props.api.id} />
                </div>
                <div className="pg-available-info">
                    <div className="pg-services">
                        <div className="div-sec-1">
                            <div className="div-sec-11">
                                <div className="logo-svg">
                                    <img src="/user-regular.svg" alt="" />
                                </div>
                                <div className="ds1-info">
                                    <p className="p1 dsp1">{props.api.PreferredTenaments}</p>
                                    <p className="p2 dsp2">Preferred Tenaments</p>
                                </div>
                            </div>
                            <div className="div-sec-12 ">
                                <div className="logo-svg">
                                    <img src="/calendar-days-solid.svg" alt="" />
                                </div>
                                <div className="ds1-info">
                                    <p className="p1 dsp1">{props.api.PostOn}</p>
                                    <p className="p2 dsp2">Posted On</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="div-sec-2">
                            <div className="div-sec-11">
                                <div className="logo-svg">
                                    <img src="/utensils-solid.svg" alt="" />
                                </div>
                                <div className="ds1-info">
                                    <p className="p1 dsp1">{props.api.FF}</p>
                                    <p className="p2 dsp2">Food Facility</p>
                                </div>
                            </div>
                            <div className="div-sec-12 ">
                                <div className="logo-svg">
                                    <img src="/clock-regular.svg" alt="" />
                                </div>
                                <div className="ds1-info">
                                    <p className="p1 dsp1">{props.api.GateClosingTime}</p>
                                    <p className="p2 dsp2">Gate Closing Time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tiffin-services ">
                    <div className="logo-svg">
                                    <img src="https://cdn-icons-png.flaticon.com/512/1019/1019782.png" alt="" />
                                </div>
                                <div className="ds1-info">
                                    <p className="p1 dsp1">Tiffin Service</p>
                                    <p className="p2 dsp2">Nearby Available</p>
                                </div>
                    </div>
                    <button className="pg-btn">Get Owner Details</button>
                </div>
            </div>
        </div>
    )
}