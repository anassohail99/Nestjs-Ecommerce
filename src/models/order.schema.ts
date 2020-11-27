import * as mongoose from "mongoose";

export const OrderSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    totaPrice: {
        type: Number,
        default: 0,

    },
    products: [
        {
            product: {
                types: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            }
            , Quality: {
                type: Number,
                default: 0,
            }
        }
    ],
    created: {
        type: Date,
        default: Date.now()
    }
})