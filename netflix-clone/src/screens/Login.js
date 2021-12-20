import React, { useState } from "react";
import "./Login.css";
import SignInScreen from "./SignInScreen";
function Login() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login_screen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          alt=""
        />
        <button
          className="loginScreen_button"
          onClick={() => {
            setSignIn(true);
          }}
        >
          Sign In
        </button>
        <div className="loginScreen_gradient" />
      </div>
      <div className="loginScreen_body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited Films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginScreen_getStarted"
                  onClick={() => {
                    setSignIn(true);
                  }}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
