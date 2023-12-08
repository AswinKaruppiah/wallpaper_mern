import React from "react";
import "./Wallpaper.css";
import Usefetch from "../../Hook/Usefetch.js";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import Loading from "../loading/Loading";

function Wallpaper() {
  const { data, loading } = Usefetch("http://localhost:3001/");

  const download = (id, imgurl) => {
    downloadfunction(id, imgurl);
  };

  function downloadfunction(url, imgurl) {
    // document.getElementById("myAnchor").href = null;
    // document.getElementById("formphotos").src = null;
    console.log(imgurl);

    // console.log(url);
    // var test = url + "img" + ("png" || "jpeg" || "jpg");
    // console.log(test);
    // document.getElementById(
    //   "myAnchor"
    // ).href = require(`./clientimages/${url}img.jpeg`);
    document.getElementById("formphotos").src = imgurl;
    document.getElementById(
      "myAnchor"
    ).href = require(`./clientimages/${url}img.jpeg`);

    document.getElementById("download").style.visibility = "visible";
  }
  function back() {
    document.getElementById("download").style.visibility = "hidden";
  }

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {data && (
            <div className="wallpaper">
              {data.wallpapers.map((photodetial) => (
                <>
                  <div
                    style={{
                      backgroundImage: `url(${photodetial.photos})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    className="holder"
                  >
                    <div className="photoinfo">
                      <h2>{photodetial.photoname}</h2>
                      <h2>{photodetial.username}</h2>
                      <h2>{photodetial.email}</h2>
                      <button
                        id={photodetial._id}
                        onClick={(e) => {
                          download(photodetial._id, photodetial.photos);
                        }}
                      >
                        Dowload
                        <CloudDownloadOutlinedIcon
                          sx={{ fontSize: 30 }}
                          className="icon"
                        />
                      </button>
                    </div>
                  </div>
                </>
              ))}
            </div>
          )}
        </>
      )}
      <div id="download" className="downloadform">
        <img id="formphotos" alt="no img" />
        <a download="Wallpaper" id="myAnchor">
          click to download image
        </a>
        <button onClick={back}>
          Go Back
          <ExitToAppOutlinedIcon sx={{ fontSize: 30 }} className="icon" />
        </button>
      </div>
    </div>
  );
}

export default Wallpaper;
{
  /* <CloudDownloadOutlinedIcon
                        className="iconimg"
                        sx={{ fontSize: 50 }}
                        id={photodetial._id}
                        onClick={(e) => {
                          download(e, photodetial.photos);
                        }} */
}
//<button>Dowload image</button>
// eslint-disable-next-line no-lone-blocks
{
  /* <img
                      key={photodetial._id}
                      className="photos"
                      src={photodetial.photos}
                      alt="not found"
                    /> */
}
// const download = async () => {
//   await axios({
//     url: "./clientimages/63a9c25b5384cc95c617d6e7img.jpeg",
//     method: "GET",
//     responseType: "blob",
//   })
//     .then((response) => {
//       const href = URL.createObjectURL(response.data);

//       const link = document.createElement("a");
//       link.href = href;
//       link.setAttribute("download", "aswin");
//       document.body.appendChild(link);
//       link.click();

//       document.body.removeChild(link);
//       URL.revokeObjectURL(href);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

//  <img
//                   src={`http://localhost:8800/${photodetial?.photos}`}
//                   // http://localhost:8800/uploads/Mon%20Dec%2026%202022-1779929.jpg
//                   alt="not found"
//                 />
//                 {console.log(
//                   `http://localhost:8800/create/${photodetial?.photos}`
//                 )}

//  {
//    data.map((photodetial) => {
//      const base64String = btoa(
//        String.fromCharCode.apply(
//          ...new Uint16Array(photodetial.photos.data.data)
//        )
//      );
//      return (
//        <img
//          className="photo"
//          src={`data:image/png;base64,${base64String}`}
//          width="300"
//          alt="not found"
//        />
//      );
//    });
//  }
