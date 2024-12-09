import { createRequire } from "module";
const require = createRequire(import.meta.url);
const mongoose = require('mongoose');

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://geetanshu1234567:Geetanshu@cluster0.arodv.mongodb.net/food-del').then(()=>{console.log("DB connected")})
}