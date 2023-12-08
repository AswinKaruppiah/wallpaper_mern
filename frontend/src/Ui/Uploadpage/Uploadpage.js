import axios from "axios";
import React, { useState } from "react";
import { storage } from "./firebase.js";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import "./Uploadpage.css";

function Uploadpage() {
  const [url, setUrl] = useState();
  // const [change, setchange] = useState();

  const [renderimg, setrenderimg] = useState();
  const [currentimg, setcurrentimg] = useState();

  const [user, setUser] = useState({
    username: "",
    email: "",
    photoname: "",
    photos: "",
  });

  const onInputchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitfunction = async (e) => {
    e.preventDefault();
    await firebase();
    await axios
      .post("http://localhost:3001/create", user)
      .then((res) => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });

    window.location.href = "./";
  };

  const image = async (e) => {
    var findimg = e.target.files[0];

    setrenderimg(findimg);

    setcurrentimg(URL.createObjectURL(findimg));
    // console.log(findimg.name);
    // let extension = findimg.name.split(".").pop();
    // console.log(extension);
  };

  const firebase = async () => {
    var unid = "id" + new Date().getTime();

    const imageRef = ref(storage, `images/${unid + "" + user.photoname} `);
    await uploadBytes(imageRef, renderimg).then(() => {
      alert("image uploaded");
    });
    const starsRef = ref(storage, `images/${unid + "" + user.photoname} `);
    await getDownloadURL(starsRef).then((url) => {
      setUrl(url);
      user.photos = url;
      let newdata = {
        username: user.username,
        email: user.email,
        photoname: user.photoname,
        photos: user.photos,
      };

      user.username = newdata.username;
      user.email = newdata.email;
      user.photoname = newdata.photoname;
      user.photos = newdata.photos;
    });
  };

  return (
    <>
      <div className="formdata">
        {renderimg && (
          <div>
            <img className="wallpaperimg" src={currentimg} alt="not found" />
          </div>
        )}

        <input
          placeholder="PhotoName"
          type="text"
          name="photoname"
          required
          onChange={(e) => {
            onInputchange(e);
          }}
        />

        <input
          placeholder="UserName"
          type="text"
          name="username"
          required
          onChange={(e) => {
            onInputchange(e);
          }}
        />

        <input
          placeholder="Email"
          type="text"
          name="email"
          required
          onChange={(e) => {
            onInputchange(e);
          }}
        />

        <input
          name="testImage"
          type="file"
          required
          // accept="image/jpeg,image/jpg"
          onChange={image}
        />

        <button onClick={submitfunction}>Upload photo</button>
      </div>
    </>
  );
}

export default Uploadpage;

// const formdata = new FormData();

// formdata.append("username", user.username);
// formdata.append("email", user.email);
// formdata.append("Image", renderimg);
// formdata.append("photoname", user.photoname);
