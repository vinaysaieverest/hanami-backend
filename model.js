"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
var mongoose_1 = require("mongoose");
var dataSchema = new mongoose_1.default.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    isavailable: {
        type: Boolean,
        required: true,
    },
    isnew: {
        type: Boolean,
        required: true,
    },
    isInOffers: {
        type: Boolean,
        required: true,
    },
    isAddedToCart: {
        type: Boolean,
        required: true,
    },
    isAddedToWishList: {
        type: Boolean,
        required: true,
    },
});
exports.Data = mongoose_1.default.model("Data", dataSchema);
