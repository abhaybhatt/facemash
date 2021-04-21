import React from 'react';
import './card.css';
import { useDispatch } from 'react-redux'
import { hotProfile } from '../../../actions/profiles.js';

const Card = ({ profile,imgSelect}) =>{

    const dispatch = useDispatch();

    const stuff =() =>{
        imgSelect();
        dispatch(hotProfile(profile._id));
    }
    return(
        <div className="card">
            <img className='imgg' src ={profile.image} onClick={stuff}/>
            <div className="name">{profile.name}</div>
        </div>
    )
}
export default Card;