// setSuperAdminFlag.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/userModel.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed:", err.message);
    process.exit(1);
  });

const setSuperAdmin = async () => {
  try {
    const user = await User.findOne({ email: "dkedubus1997@gmail.com" });

    if (!user) {
      console.log("❌ User not found");
      process.exit();
    }

    user.isSuperAdmin = true;
    await user.save();

    console.log("✅ User updated with isSuperAdmin: true");
    process.exit();
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
};

setSuperAdmin();
