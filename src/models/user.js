import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    password: {
        type: String,
    },
    status: {
        type: Boolean
    },
    email: {
        type: String,
        unique: true,
        validate: {
            validator: function (email) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
            },
            message: '{VALUE} is not a valid email address!',

        },
        required: [true, 'Email address required']
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
},
{
    versionKey: false,
    usePushEach: true,
    timestamps:true
});

export default mongoose.model('User', UserSchema);
