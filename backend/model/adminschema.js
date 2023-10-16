import mongoose from "mongoose";

const Adminschema = new mongoose.Schema(
  {
    adminname: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    onAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Admin", Adminschema);
