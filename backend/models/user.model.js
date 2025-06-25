import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            minlength:6
        },
        logs:[{
            image:{
                type: String
            },
            desc:{
                type: String
            }
        }]
    },
    {
        timestamps: true
    }
)

const User=mongoose.model('user',userSchema)
export default User