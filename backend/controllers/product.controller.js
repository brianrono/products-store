import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (_req, res) => {//choose to remove the req parameter or just keep as underscored 
   try {
      const products = await Product.find({});
      res.status(200).json({ success: true, data: products });
   } catch (error) {
      console.error("Error in fetching products: ", error.message);
      res.status(500).json({ success: false, message: "Server error" });
   }
};

export const createProduct = async (req, res) => {
   const product = req.body; //user sends this data

   if (!product.name || !product.price || !product.image) {
      return res.status(400).json({ success: false, message: "Please input all fields." });
   }
   
   if (isNaN(Number(req.body.price))) { 
      return res.status(400).json({ success: false, message: "Price must be a number."})
   }

   try {
      const existingProduct = await Product.findOne({name: product.name});
      if (existingProduct){
         return res.status(409).json({success: false, message: "Product with this name already exists." });
      }

      const newProduct = new Product(req.body)
      await newProduct.save();
      res.status(201).json({ success: true, data: newProduct });
   } catch (error) {
      console.error("Error in Creating Product:", error);
      res.status(500).json({ success: false, message: "Server error", error: error.message });
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
      res.status(200).json({ success: true, data: updatedProduct });
   } catch (error) {
      console.error("Error in updating product:", error.message);
      res.status(500).json({ success: false, message: "Server error" });
   }
};

export const deleteProduct =  async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ success: false, message: "Invalid Product Id" });
   }

   try {
      const deletedProduct = await Product.findByIdAndDelete(id);
      if(!deletedProduct) {
         return res.status(404).json({ success: false, message: "Product not found"});
      }
      res.status(200).json({ success: true, message: "Product deleted." });
   } catch (error) {
      console.error("Error in deleting product:", error.message);
      res.status(500).json({ success: false, message: "Server error" });
   }
};