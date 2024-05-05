import React from "react";
import "../CSS/ForPgOwner.css";

export default function ForPgOwner() {
    return (
        <div className="pg-owner-login-container">
                <h1 className="login-frame-heading">Login as PG Owner</h1>
            <div className="pg-row">
                <div className="pg-owner-login-frame">
                    <form action="form" className="login-form">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="example@gmail.com"/>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="********"/>
                    </form>
                    <div className="login-frame-button">
                        <button className="login-button">Login</button>
                        <p className="fp">forgot Password?</p>
                    </div>
                </div>
                <div className="pg-owner-signup-frame">
                    <h2 className="signup-heading">
                        New Here
                    </h2>
                    <p className="
                    ">sign up and discover</p>
                    <button className="signup-button">Sign up</button>
                    </div>
            </div>

        </div>
    )
}