// SignIn.js
import React, { useState } from "react";
import "../CSS/signIn.css";

const SignIn = ({ onClose, onSignUpClick }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignIn = () => {
        // Implement sign-in logic here
        console.log("Signing in with:", email, password);
        onClose();
    };

    return (
        <div className="signIn-container">
            <h2 className="signIn-heading">Sign In</h2>
            <form action="" className="signIn-form">
                <label htmlFor="Email">Email</label>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} className="signIn-input-field" />
                <label htmlFor="Password">Password</label>
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} className="signIn-input-field" />
                <div className="buttons">
                    <button className="signIn-btn" onClick={handleSignIn}>Sign In</button>
                    <button className="c-btn" onClick={onClose}>Cancel</button>
                    <button className="signup-link" onClick={onSignUpClick}>Sign Up</button> {/* Add Sign Up link */}
                </div>
            </form>
        </div>
    );
};

export default SignIn;
