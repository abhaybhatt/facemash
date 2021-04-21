import mongoose from 'mongoose';

const profileSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    year:{
        type:Number,
        default:1
    },
    branch:{
        type:String,
        default:"IT"
    },
    image:String,
    hot:{
        type:Number,
        default:0
    },
    nothot:{
        type:Number,
        default:0
    }
})

const Profiles = mongoose.model('Profile',profileSchema);
export default Profiles;