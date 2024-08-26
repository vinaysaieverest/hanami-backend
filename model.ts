import mongoose from 'mongoose';


const dataSchema = new mongoose.Schema({
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
  isAddedToCartFromHome: {
    type: Boolean,
    required: true,
  },
  isAddedToCartFromProduct: {
    type: Boolean,
    required: true,
  },
  isAddedToWishList: {
    type: Boolean,
    required: true,
  },
  
});

export const Data = mongoose.model("Data", dataSchema);


