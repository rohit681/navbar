/** @format */

import React, { useState } from "react";
import "./css/home.css";

const Home = () => {
  const [info, setInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const getDetails = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const submitDetails = (e) => {
    e.preventDefault();
    if (!info.fname || !info.lname || !info.email || !info.phone)
      alert("Please fill all the required feild");
    else if (info.phone.length !== 10) alert("Ivalid Phone number");
    else {
      const arr = info.email.split("@");
      console.log(arr);
      if (
        arr.length !== 2 ||
        !arr[1].includes(".com") &&
        !arr[1].includes(".in")
      )
        alert("please enter a valid email");
      else {
        setDetails(info);
        setInfo({ fname: "", lname: "", email: "", phone: "" });
      }
    }
  };

  return !details.fname &&
    !details.lname &&
    !details.email &&
    !details.phone ? (
    <div style={{ height: "90vh" }}>
      <form
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid #f3f3f3",
            width: "40vh",
            height: "40vh",
            boxShadow: "5px 5px whitesmoke",
          }}
        >
          <input
            type="text"
            name="fname"
            required
            value={info.fname}
            onChange={(e) => getDetails(e)}
            placeholder="First Name"
          />

          <input
            type="text"
            name="lname"
            required
            value={info.lname}
            onChange={(e) => getDetails(e)}
            placeholder="Last Name"
          />

          <input
            type="email"
            name="email"
            required
            value={info.email}
            onChange={(e) => getDetails(e)}
            placeholder="Email"
          />

          <input
            type="number"
            required
            name="phone"
            value={info.phone}
            onChange={(e) => getDetails(e)}
            placeholder="Phone"
          />
          <input
            type="submit"
            style={{ border: "none" }}
            name="submit"
            onClick={(e) => submitDetails(e)}
          />
        </div>
      </form>
    </div>
  ) : (
    <div style={{ height: "90vh" }}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          marginLeft: "40%",
          justifyContent: "center",
          fontSize: "20px",
          padding: "0.2%",
        }}
      >
        <div style={{ margin: "0.2%" }}>
          Name: {details.fname} {details.lname}
        </div>

        <div style={{ margin: "0.2%" }}>Email: {details.email}</div>

        <div style={{ margin: "0.2%" }}>Phone No: {details.phone}</div>
      </div>
    </div>
  );
};

export default Home;
