import React, { useState } from "react";
import "../CSS/signup.css"

const SignUp = ({ onClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignUp = () => {
        // Implement sign-up logic here
        console.log("Signing up with:", email, password);
        onClose();
    };

    return (
        <div className="signUp-container">
            <h2 className="signUp-heading">Sign Up</h2>
            <form action="" className="signUp-form">
                <label htmlFor="Email">Email</label>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} className="signUp-input-field" />
                <label htmlFor="Password">Password</label>
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} className="signUp-input-field" />
                <div className="signup-buttons">
                    <button className="signUp-btn" onClick={handleSignUp}>Sign Up</button>
                    <button className="c-btn" onClick={onClose}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
