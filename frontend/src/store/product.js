import { create } from "zustand";

export const useProductStore = create ((set) => ({//for global use
   products: [],
   setProducts: (products) => set({ products }),
   createProduct: async (newProduct) => {
      if(!newProduct.name || !newProduct.price || !newProduct.image) {
         return {success: false, message: "Please fill in all the fields."};
      }
      const res = await fetch("/api/products", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(newProduct)
      });

      if (!res.ok) {
         let errorMessage = "Failed to create product.";
         try {
            const errorData = await res.json();
            errorMessage = errorData.message || errorMessage;
         }
         catch (error) {
            console.error("Failed to parse error response:", error);
         }
         return { success: false, message: errorMessage };
      }

      const  data = await res.json();
      set((state) => ({ products:[...state.products, data.data] }));
      return {success: true, message: "Product created successfully."};
   }
}));