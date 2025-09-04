import mongoose from "mongoose";


const urlSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true },
    shortCode: { type: String, required: true, unique: true },
    validityPeriod: { type: Date, required: true },
},{
    timestamps: true
});


const urlModel = mongoose.model('Url', urlSchema);

export default urlModel;