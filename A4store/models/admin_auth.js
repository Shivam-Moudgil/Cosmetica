
import { Schema, model, models } from 'mongoose'


const adminSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin'],
        required: true,
    }
}, {
    timestamps: true,
})

const Admins = models.admin || model('admin', adminSchema)

export default Admins