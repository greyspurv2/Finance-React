import React from 'react';
import LoginButton from './loginbutton';

const LandingLogin = () => {
	return (
		<div className="landing-login-container">
			<h1>Create An Account</h1>
			<div className="landing-login-box">
				<p>If you don't already have an account, you can sign up by hitting the button below! If you have an account, you can specify what crypto, stock, and news information you get. This means you don't have to deal with too much information, you'll only see what you want! Sounds pretty great, right? The best part of all, an account is free! So why not give it a shot?</p>
				<button>Create Account</button>
			</div>
		</div>
	)
}

export default LandingLogin;