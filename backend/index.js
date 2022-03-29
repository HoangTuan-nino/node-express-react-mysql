import express from "express";

import cors from "cors";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";

const app = express();
try {
  await db.authenticate();
  console.log("Database connected...");
} catch (error) {
  console.error("Connection error:", error);
}
app.use(cors());
app.use(express.json());
app.use("/products", productRoutes);

app.listen(5000, () => console.log("Server running at port 5000"));
