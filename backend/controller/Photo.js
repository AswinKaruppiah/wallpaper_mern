import Wallpaper from "../model/wallschema.js";
import fs from "fs";
import { log } from "console";
import imageDownloader from "node-image-downloader";

//create
export const createphoto = async (req, res) => {
  const newwallpaper = new Wallpaper(req.body);

  try {
    const savephoto = await newwallpaper.save();

    imageDownloader({
      imgs: [
        {
          uri: savephoto.photos,
          filename: savephoto._id + "img",
        },
      ],
      dest: "../frontend/src/Ui/Intopage/clientimages", //destination folder
    })
      .then((info) => {
        console.log("all done", info);
      })
      .catch((error, response, body) => {
        console.log("something goes bad!");
        console.log(error);
      });

    res.status(200).json(savephoto);
  } catch (err) {
    console.log(err, "err");
  }
};

//gatall
export const getphoto = async (req, res) => {
  try {
    const wallpapers = await Wallpaper.find();
    res.status(200).json({ status: "200", wallpapers });
  } catch (err) {
    res.status(500).json(err);
  }
};

//Delete
export const deletephoto = async (req, res) => {
  try {
    await Wallpaper.findByIdAndDelete(req.params.id);
    res.status(200).json("photo has been deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
};

// username: req.body.username
// photos: req.body.photos,
// photos: {
//   data: fs.readFileSync("uploads/" + req.file.filename),
//   contentType: "image/png/jpg",
// },
// email: req.body.email,
// photoname: req.body.photoname,

//  username: req.body.username,
//     photos: req.file.path,
//     // photos: {
//     //   data: fs.readFileSync("uploads/" + req.file.filename),
//     //   contentType: "image/png/jpg",
//     // },
//     email: req.body.email,
//     photoname: req.body.photoname,
