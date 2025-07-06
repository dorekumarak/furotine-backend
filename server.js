import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/admin", adminRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("🌐 Furotine API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
