import express from "express";
import { getphoto, createphoto, deletephoto } from "../controller/Photo.js";
import multer from "multer";

const router = express.Router();

router.get("/", getphoto);

router.post("/create", createphoto);
router.delete("/:id", deletephoto);

export default router;
// upload.single("Image", "username", "photoname", "email"),

//storage
// const Storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       new Date().toDateString().replace(/:/g, "-") + "-" + file.originalname
//     );
//   },
// });
// const filefilter = (req, file, cb) => {
//   if (
//     file.mimetype == "image/png" ||
//     file.mimetype == "image/jpg" ||
//     file.mimetype == "image/jpeg"
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const upload = multer({ storage: Storage, fileFilter: filefilter });
