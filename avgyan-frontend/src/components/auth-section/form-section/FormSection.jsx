/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

// icons import
import lockedLock from "../../../assets/icons/auth/locked-lock.svg";
import unLockedLock from "../../../assets/icons/auth/unlocked-lock.svg";
import mailIcon from "../../../assets/icons/auth/mail-icon.svg";
import userIcon from "../../../assets/icons/auth/user-icon01.svg";
import { logIn, register } from "../../../api/axios";
import useAuth from "../../../hooks/userAuth.hook";
import { useNavigate } from "react-router-dom";

const FormSection = ({ setIsSignIn, isSignIn }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const pass = document.getElementById("password");
    if (isPasswordVisible) {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }, [isPasswordVisible]);

  const OnFormSubmit = async (e) => {
    e.preventDefault();
    if (!isSignIn) {
      console.log("LogIn");
      const userData = {
        email,
        password,
      };
      try {
        const { data } = await logIn(userData);
        const { loggedInUser, accessToken, refreshToken } = data.data;
        localStorage.setItem("accessToken", accessToken);
        setAuth({ loggedInUser, accessToken, refreshToken });
        navigate("/");
      } catch (error) {
        if (!error?.originalStatus) {
          alert("No Server Response");
        } else if (error.originalStatus === 400) {
          alert("Missing Username or Password");
        } else if (error.originalStatus === 401) {
          alert("Unauthorized");
        } else {
          alert("Login Failed");
        }
        console.log("Log In failed !! ", error);
      }
    } else {
      console.log("Registration");
      const registerData = {
        username,
        email,
        password,
      };
      try {
        await register(registerData);
        setIsSignIn(!isSignIn);
      } catch (error) {
        console.log("error from register: ", error);
        if (!error?.originalStatus) {
          alert("No Server Response");
        } else if (error.originalStatus === 400) {
          alert("Missing Username or Password");
        } else if (error.originalStatus === 401) {
          alert("Unauthorized");
        } else {
          alert("Login Failed");
        }
        console.log("Log In failed !! ");
      }
    }
  };

  return (
    <div className="sign-section-right-form_section">
      <div className="headTag">
        <h1>
          {isSignIn ? "Starting My " : "Returning in "}
          <span>Journey</span>
        </h1>
        <h5>{isSignIn ? "Sign in to Start Learning" : "Log in to Start Learning Again"}</h5>
      </div>
      <div className="formPart">
        <form action="" method="post">
          {isSignIn && (
            <div className="inputBlock">
              <input
                type="text"
                name="userName"
                value={username}
                id="userName"
                placeholder="Username"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <img src={userIcon} alt="" />
            </div>
          )}
          <div className="inputBlock">
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <img src={mailIcon} alt="" />
          </div>
          <div className="inputBlock">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <img
              src={isPasswordVisible ? unLockedLock : lockedLock}
              alt=""
              style={{ cursor: "pointer" }}
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          </div>

          <div className=" submitBtn flex">
            <button type="submit" className="largeBtn" onClick={OnFormSubmit}>
              {isSignIn ? "Sign In" : "Log In"}
            </button>
          </div>
        </form>
      </div>

      <div className="redirect_section ">
        <h5>
          {isSignIn ? " Already have an account?" : "New Here?"}{" "}
          <span onClick={() => setIsSignIn(!isSignIn)}> {!isSignIn ? "Sign In" : "Log In"}</span>
        </h5>
      </div>
    </div>
  );
};

export default FormSection;
