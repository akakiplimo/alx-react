import React from "react";
import './Login.css';

export default function Login() {
    <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input name='email' type="email" id='email' />
        &nbsp;&nbsp;
        <label htmlFor="password">Password: </label>
        <input name='password' type="password" id='password' />
        &nbsp;&nbsp;
        <button>OK</button>
    </div>
}