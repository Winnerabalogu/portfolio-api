import { Schema } from "mongoose";
import bcrypt from 'bcrypt';


const userSchema = new Schema(
    {
        name: {type: String, required: true },
        password:{type: String, required: true},
        phone:{type: Number, required: true},
        email:{type: String, required: true}
    },
    {timestamps: true}
);
// Hash the password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        return next(error);
    }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};


export default userSchema;