import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://BiteBuddy:9080851969@cluster0.6igrir8.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}