import axios from "axios";
import React, { useState } from "react";
import "./Adminlogin.css";

function Adminlogin() {
  const [admin, setadmin] = useState({
    adminname: "",
    password: "",
  });

  const { adminname, password } = admin;

  const onInputchange = (e) => {
    setadmin({ ...admin, [e.target.name]: e.target.value });
  };
  const submitfunction = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios
        .post("http://localhost:8800/admin/login", admin)
        .then((res) => {
          if (res.data.status === "ok") alert("login successfull");
          window.localStorage.setItem("token", JSON.stringify(res.data.data));
          window.location.href = "./adminpanel";
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="adminlogin">
      <form onSubmit={(e) => submitfunction(e)}>
        <input
          type="text"
          name="adminname"
          placeholder="AdminName"
          onChange={(e) => {
            onInputchange(e);
          }}
        />
        <br />
        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            onInputchange(e);
          }}
        />
        <br />
        <input className="login-ad" type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Adminlogin;
