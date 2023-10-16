import mongoose from "mongoose";

const Wallpaperschema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    photos: {
      type: String,
      required: true,
      // contentType: String,
    },
    photoname: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Wallpaper", Wallpaperschema);
