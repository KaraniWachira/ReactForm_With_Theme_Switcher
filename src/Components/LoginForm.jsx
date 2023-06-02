import React, { useState } from 'react'
import './App.css'


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "" || password === "") {
            alert("Kindly enter your valid email and valid password");
            return;
        }
    };
    return (
        <form className="form" onSubmit={handleSubmit} >
            <h4>Login Form</h4>
            <input className='input-email'
            type="email"
            placeholder = "Type your email here"
            value ={email}
            onChange={(event) => setEmail(email.target.value)} 
        />

            <input className='input-password'
                type="password"
                placeholder='Password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button>Submit</button>
        </form>
    );
};
<div>
</div>


export default LoginForm
