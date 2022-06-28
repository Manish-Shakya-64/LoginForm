import React, { useState } from "react";
import "./LoginForm.css";
// import axios from "axios";

function LoginForm() {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  // const [msg, setmsg] = useState("");
  const userNameHandler = (e) => {
    setuserName(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  //handles submit button click
  const loginHandler = async (e) => {
    e.preventDefault();
    if (userName === "" || password === "") {
      // alert("Please enter userName and password");
      if (userName !== "" && password === "") {
        alert("Please Enter Password");
        console.log("password is empty");
      } else if (userName === "" && password !== "") {
        alert("Please Enter userName");
        console.log("userName is empty");
      } else {
        alert("Please Enter userName and Password");
        console.log("both inputs are empty");
      }
    } else {
      
       

        // console.log(userName);
        // console.log(password);
        // alert("Login successful");
        setuserName("");
        setPassword("");
        // setmsg("Login Successful");
        // fake api "http://restapi.adequateshop.com/api/authaccount/login" "http://192.168.3.170/VisitorMangaementSystems/Auth/Login
        // let item = { userName, password };
        // console.log(item);
        // await fetch(
        //   `http://192.168.3.170/VisitorMangaementSystems/Auth/Login?userName=${userName}&password=${password}`,
        //   {
        //     method: "POST",
        //     // mode: "no-cors",
        //     headers: {
        //      'Content-Type':'application/x-www-form-urlencoded',
        //      "Access-Control-Allow-Origin":'*',
        //      "Access-Control-Allow-Credentials" : true
        //     },
        //     // body:JSON.stringify(item),
        //   }
        // )
        //   .then((response) =>{
        //     console.log(response);
        //     console.log(typeof(response));}
        //   )
        //   .then(result => {
        //     console.log("result:::",result)
        //     JSON.parse(result);
        //   });

        // result = await result.json();
        // localStorage.setItem(JSON.stringify(result)

        var requestOptions = {
          mode : 'no-cors',
          method: 'POST',
          redirect: 'follow',
         
        };
        
        fetch(`http://192.168.3.170/VisitorMangaementSystems/Auth/Login?userName=${userName}&password=${password}`, requestOptions)
          .then(response =>{ response.text(); console.log("response:::",response)})
          .then(result => console.log("result :::: ",typeof(result)))
          .catch(error => console.log('error:::::', error));
        
      } 
      
      
    
  };

  return (
    <>
      <form method="POST">
        <div className="mainForm">
          <h2>Login</h2>

          <div className="textBox">
            <label htmlFor="user name">userName</label>
            <br />
            <input
              type="text"
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
              className="inputBox"
              value={password}
              onChange={passwordHandler}
            />
          </div>
          <button type="submit" className="submit-btn" onClick={loginHandler}>
            LOGIN
          </button>
        </div>
        <h1 style={{ color: "Green", textAlign: "center", marginTop: "10px" }}>
          {/* {msg} */}
        </h1>
      </form>
    </>
  );
}

export default LoginForm;
