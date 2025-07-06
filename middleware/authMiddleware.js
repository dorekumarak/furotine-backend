import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import Admin from "../models/Admin.js";

// Verify Token
const protectAdmin = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.admin = await Admin.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("❌ Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("❌ Not authorized, no token");
  }
});

// Check Super Admin
const superAdminOnly = (req, res, next) => {
  if (req.admin && req.admin.role === "superadmin") {
    next();
  } else {
    res.status(403);
    throw new Error("❌ Access denied: Not Super Admin");
  }
};

export { protectAdmin, superAdminOnly };
