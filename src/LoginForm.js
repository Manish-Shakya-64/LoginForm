import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [msg,setmsg] = useState("");
  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  //handles submit button click
  const loginHandler = (e) => {
    e.preventDefault();
    if (userName === "" || password === "") {
      // alert("Please enter username and password");
      if (userName !== "" && password === "")
       {
        alert("Please Enter Password");
      }

       else if (userName === "" && password !== "")
        {

        alert("Please Enter Username");

      }
       else
        {
        alert("Please Enter Username and Password");
      }
    }
    else{
        console.log(userName);
        console.log(password);
        alert("Login successful");
        setUserName("");
        setPassword("");
        setmsg("Login Successful");
    }
  };
  return (
    <>
      <form>
        <div className="mainForm">
          <h2>Login</h2>

          <div className="textBox">
            <label htmlFor="user name">username</label>
            <br />
            <input
              type="text"
              name="userName"
              className="inputBox"
              value={userName}
              onChange={userNameHandler}
              autoFocus
              
            />
            <br />
            <label htmlFor="password">password</label>
            <br />
            <input
              type="password"
              name="password"
              className="inputBox"
              value={password}
              onChange={passwordHandler}
            />
          </div>
          <button type="submit" className="submit-btn" onClick={loginHandler}>
            LOGIN
          </button>
        </div>
        <h1 style={{color:'Green',textAlign:'center',marginTop:'10px'}}>{msg}</h1>
      </form>
    </>
  );
}

export default LoginForm;
