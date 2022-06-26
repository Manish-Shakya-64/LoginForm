import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [msg,setmsg] = useState("");
  const emailHandler = (e) => {
    setemail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  //handles submit button click
  const loginHandler = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      // alert("Please enter email and password");
      if (email !== "" && password === "")
       {
        alert("Please Enter Password");
        console.log("password is empty");
      }

       else if (email === "" && password !== "")
        {

        alert("Please Enter email");
        console.log("email is empty");


      }
       else
        {
        alert("Please Enter email and Password");
        console.log("both inputs are empty");

      }
    }
    else{
        // console.log(email);
        // console.log(password);
        alert("Login successful");
        setemail("");
        setPassword("");
        setmsg("Login Successful");

        let item = {email,password};
         await fetch("http://restapi.adequateshop.com/api/authaccount/login",{
          method:'POST',
          headers:{
            "Content-Type": "application/json",
            "Accept": 'application/json'
          },
          body:JSON.stringify(item)
        }).then(response => 
          console.log(response)
        );
        // result = await result.json();
        // localStorage.setItem(JSON.stringify(result))
    

    }
  };
  return (
    <>
      <form>
        <div className="mainForm">
          <h2>Login</h2>

          <div className="textBox">
            <label htmlFor="user name">email</label>
            <br />
            <input
              type="text"
              className="inputBox"
              value={email}
              onChange={emailHandler}
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
        <h1 style={{color:'Green',textAlign:'center',marginTop:'10px'}}>{msg}</h1>
      </form>
    </>
  );
}

export default LoginForm;
