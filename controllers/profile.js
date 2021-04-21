import mongoose from 'mongoose';
import Profiles from '../models/profile.js';

export const createProfile = async(req,res) =>{
    try{
        const profile = req.body;
        const newProfile = new Profiles(profile);
        await newProfile.save();
        res.status(201).send(newProfile);
    }
    catch(err){
        res.send(409).send(err)
    }
}

export const getProfile = async(req,res) =>{
    try{
        const profiles = await Profiles.find();
        res.status(200).json(profiles);
    }
    catch(err){
        res.send(4040).json(err);
    }
}

export const hotProfile = async(req,res) =>{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id ${id}`);
    const profile = await Profiles.findById(id);
    const oldhot = profile.hot + 1
    const updateProfile = await Profiles.findByIdAndUpdate(id,{hot : oldhot},{new:true}) ;
    res.json(updateProfile);
}