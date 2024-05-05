import React from "react";
import "../CSS/MainFrame.css"
import Filter from "./filter";
import PgDetails from "./PgDetails";
import API from "./API";

export default function MainFrame() {
    // console.log(API[0])
    return (
        <div className="main-frame-container">
            <aside className="filter-section">
                <Filter/>
            </aside>
            <div className="pg-details-section">
                <PgDetails 
                key={API[0].id}
                api = {API[0]}
                />
                 <PgDetails 
                key={API[1].id}
                api = {API[1]}
                />
               <PgDetails 
                key={API[2].id}
                api = {API[2]}
                />
                <PgDetails 
                key={API[3].id}
                api = {API[3]}
                />
                <PgDetails 
                key={API[4].id}
                api = {API[4]}
                />
                <PgDetails 
                key={API[5].id}
                api = {API[5]}
                />
                <PgDetails 
                key={API[6].id}
                api = {API[6]}
                />
                <PgDetails 
                key={API[7].id}
                api = {API[7]}
                />
                <PgDetails 
                key={API[8].id}
                api = {API[8]}
                />
                <PgDetails 
                key={API[9].id}
                api = {API[9]}
                />
               
            </div>
        </div>
    )
}