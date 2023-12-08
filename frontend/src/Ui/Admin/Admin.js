import React, { useEffect } from "react";
import axios from "axios";
import Usefetch from "../../Hook/Usefetch.js";
import "./Admin.css";
import Loading from "../loading/Loading.js";

function Admin() {
  let getitem = localStorage.getItem("token");
  const { data, loading } = Usefetch("http://localhost:3001/admin/adminpanel", {
    headers: { token: getitem },
  });
  console.log(data);
  // useEffect(() => {
  //   let getitem = localStorage.getItem("token");

  //   if (!getitem) {
  //     alert("your not admin");
  //     window.location.href = "./login";
  //   }
  // }, []);

  const getid = async (e) => {
    let deleteid = e.target.id;
    await axios.delete(`http://localhost:3001/admin/${deleteid}`);
    window.location.href = "./adminpanel";
  };

  return (
    <div className="admin">
      {loading ? (
        <Loading />
      ) : (
        <>
          {data && (
            <>
              {data.status === "404" ? (
                <center>
                  <h1>{data.data}</h1>
                  <br />
                  <h2>
                    Plz try to login again <a href="/admin/login">login page</a>
                  </h2>
                </center>
              ) : (
                <>
                  {data.wallpapers.map((photodetial) => (
                    <div className="adminitems">
                      <img
                        className="adminphotos"
                        src={photodetial.photos}
                        alt="not found"
                      />
                      <div className="admincontent">
                        <h3>photoname:{photodetial.photoname}</h3>
                        <h3>username:{photodetial.username}</h3>
                        <h3>gmail:{photodetial.email}</h3>
                        <button
                          id={photodetial._id}
                          className="button-50"
                          onClick={(e) => {
                            getid(e);
                          }}
                        >
                          delete
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Admin;
