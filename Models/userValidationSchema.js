import mongoose from "mongoose";



// user validation schema 
const userValidationSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required:true
    },
    email: { 
        type: String, 
        required: true, 
        unique: true
     },
     isEmailVerified: {
        type: Boolean,
        default: false
     },
    phone: {
        type: String
    },
    gstin: {
        type: String,
    },
    isGstVerified:{
        type: Boolean,
        default: false
    },
    accountNo: {
        type:String,
    },
    isAccountVerified: {
        type: Boolean,
        default: false
    },
    pincode: {
        type: String,
    },
    city: {
        type: String
    },
    district: {
        type: String
    },
    state: {
        type: String
    },
    PAN: {
        type: String,
    },
    Aadhar: {
        type: String,
    }

}, {timestamps: true,});






const User = mongoose.model('User', userValidationSchema);

export default User;


