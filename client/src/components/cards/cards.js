import React from 'react';
import Card from './card/card.js';
import './cards.css';
import { useSelector } from 'react-redux'
import{  CircularProgress} from '@material-ui/core';

import goti from '../../images/goti.jpeg';
import vasu from '../../images/vasu.jpeg';

const Cards = () =>{
    const profiless = useSelector((state)=>state.profiles);

    const[pro1,setPro1] = React.useState(Math.floor(Math.random() * profiless.length));
    const[pro2,setPro2] = React.useState(Math.floor(Math.random() * profiless.length));

    React.useEffect(()=>[
        imgSelect()
    ],[]);
    

    const imgSelect = () =>{
        setPro1(Math.floor(Math.random() * profiless.length));
        setPro2(Math.floor(Math.random() * profiless.length));

        while(pro1 === pro2){
            setPro2(Math.floor(Math.random() * profiless.length));
        }
    }
    
     console.log(profiless[0]);
    return(
        !profiless.length ? <CircularProgress /> :(
            <div className="cards">
            <Card  profile={profiless[pro1]}  imgSelect ={imgSelect}  />
            <div className="or">OR</div>
            <Card   profile={profiless[pro2]} imgSelect ={imgSelect} />
        </div>
        )
        
    )
}

export default Cards;
