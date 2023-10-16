import express from "express";
import { getphoto, deletephoto } from "../controller/Photo.js";

import {
  createadmin,
  deleteadmin,
  getadmin,
  login,
} from "../controller/admin.js";
import { verifyadmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/login", login);
// router.post("/athu", verifyadmin, getphoto);
router.get("/adminpanel", getphoto);
router.delete("/:id", deletephoto);
// postman api
router.delete("/:id", deleteadmin);
router.get("/createadmin", createadmin);

export default router;
