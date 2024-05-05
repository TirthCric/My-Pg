import React from "react";
import "../CSS/filter.css"

export default function Filter() {
    return (
        <div className="filter-container">
        <h2 className="filter-heading">Filters</h2>
        <hr />
        <div className="pg-for pg-sec">
            <p className="sub-heading">PG For</p>
            <ul className="list-items li-1"></ul>
            <input type="radio" id="radio-button cbk" />
            <label htmlFor="radio-button-1">Male</label>
            <input type="radio" id="radio-button cbk" />
            <label htmlFor="radio-button-2">Fimale</label>
            <input type="radio" id="radio-button cbk" />
            <label htmlFor="radio-button-3">AnyOne</label>
        </div>
        <div className="room-type pg-sec">
            <p className="sub-heading">Room Type</p>
            
            <li className="room-items">
            <input type="checkbox" id="checkbox-1" />
            <label htmlFor="checkbox-1">Single Room</label>
            </li>
            <li className="room-items">
            <input type="checkbox" id="checkbox-2" />
            <label htmlFor="checkbox-2">Double Room</label>
            </li>
            <li className="room-items">
            <input type="checkbox" id="checkbox-3" />
            <label htmlFor="checkbox-3">Triple Room</label>
            </li>
            <li className="room-items">
            <input type="checkbox" id="checkbox-4" />
            <label htmlFor="checkbox-4">Four Room</label>
            </li>
            
        </div>
        <div className="prefered-for pg-sec">
            <p className="sub-heading">Prefered For</p>
            <ul className="list-items li-1">
        <li className="prefered-items">
            <input type="checkbox" id="checkbox-student" />
            <label htmlFor="checkbox-student">Student</label>
            </li>
            <li className="preferd-items">
            <input type="checkbox" id="checkbox-professional" />
            <label htmlFor="checkbox-professional">Professional</label>
            </li>
            </ul>
        </div>
        <div className="food-included pg-sec">
            <p className="sub-heading">Food Included</p>
            <ul className="list-items li-1">
            <li className="food-items">
            <input type="checkbox" id="cb-breakfast" />
            <label htmlFor="cb-breakfast">BreakFast</label>
            </li>
            <li className="food-items">
            <input type="checkbox" id="cb-lunch" />
            <label htmlFor="cb-lunch">Lunch</label>
            </li>
            <li className="food-items">
            <input type="checkbox" id="cb-dinner" />
            <label htmlFor="cb-dinner">Dinner</label>
            </li>
            </ul>
        </div>
        </div>
    )
}