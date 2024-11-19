import mongoose from "mongoose";

const productSchema = new mongoose.Schema(//add uniqueness constraint
    {
        name: {
            type: 'string',
            required: true, unique: true
        },
        price: {
            type: 'number',
            required: true,
        },
        image: {
            type: 'string',
            required: true,
        },
    },
    {
        timestamps: true, //createdAt, updatedAt
    }
);

const Product = mongoose.model('Product', productSchema);

export default Product;