import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (_req, res) => {//choose to remove the req parameter or just keep as underscored 
   try {
      const products = await Product.find({});
      res.status(200).json({ success: true, data: products });
   } catch (error) {
      console.log("error in fetching products: ", error.message);
      res.status(500).json({ success: false, message: "Server error: " });
   }
};

export const createProduct = async (req, res) => {
   const product = req.body; //user sends this data

   if (!product.name || !product.price || !product.image) {
      return res.status(400).json({ success: false, message: "Please input all fields." });
   }

   const newProduct = new Product(product)

   try {
      await newProduct.save();
      res.status(201).json({ success: true, data: newProduct });
   } catch (error) {
      console.error("Error in Create Product:", error.message);
      res.status(500).json({ success: false, message: "Server error" });
   }
};

export const updateProduct = async (req, res) => {
   const { id } = req.params;
   const product = req.body;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ success: false, message: "Invalid Product Id" });
   }

   try {
      const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
      if (!updatedProduct) {
         return res.status(404).json({success: false, message: "Product not found" });//include updated product data in response for consistency
      }
      res.status(200).json({ success: true, message: "Product updated successfully." });
   } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
   }
};

export const deleteProduct =  async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ success: false, message: "Invalid Product Id" });
   }

   try {
      await Product.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "Product deleted successfully." });
   } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
   }
};