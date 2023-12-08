import Admin from "../model/adminschema.js";

import jwt from "jsonwebtoken";

//create
export const createadmin = async (req, res) => {
  const newAdmin = new Admin(req.body);
  try {
    const savedAdmin = await newAdmin.save();
    res.status(200).json(savedAdmin);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Delete
export const deleteadmin = async (req, res) => {
  try {
    await Admin.findByIdAndDelete(req.params.id);
    res.status(200).json("admin has been deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
};

//Get all
export const getadmin = async (req, res, next) => {
  try {
    const admin = await Admin.find();
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json(err);
  }
};

//login user with cookie
export const login = async (req, res, next) => {
  try {
    const user = await Admin.findOne({ adminname: req.body.adminname });
    const ispasswordcorrect = await Admin.findOne({
      password: req.body.password,
    });

    //"!" user not found situation
    if (!user) return res.status(500).json("user not found");

    if (!ispasswordcorrect) return res.status(500).json("password not found");

    //for admin user
    const token = jwt.sign(
      // id,onadmin is your wish of information
      { id: user._id, onAdmin: user.onAdmin },
      process.env.jwt,
      { expiresIn: "2h" }
    );

    // show details
    // const { password, onAdmin, adminname } = user;

    return res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        status: "ok",
        data: token,
        user,
      });

    // .status(200)
    // .json(user);
    // if (res.status(201)) {
    //   console.log(token);
    //   return res.json({ status: "ok", data: token, user });
    // } else {
    //   return res.json({ status: "error" });
    // }
  } catch (err) {
    console.log(err);
  }
};
