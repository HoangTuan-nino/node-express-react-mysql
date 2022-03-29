import express from "express";

import {
  getAllProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/Products.js";

const route = express.Router();
route.get("/", getAllProduct);
route.get("/:id", getProductById);
route.post("/", createProduct);
route.patch("/:id", updateProduct);
route.delete("/:id", deleteProduct);

export default route;
