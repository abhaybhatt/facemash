import React from 'react';
import './Leaderboard.css'
import { useSelector } from 'react-redux';
import { Avatar } from '@material-ui/core';



const Leaderboard = () =>{
    const profiles = useSelector((state)=>state.profiles);

    function compare(a,b){
        const A = a.hot;
        const B = b.hot;
        if(A >= B)
        return -1;
        else
        return 1;
    }

    profiles.sort(compare);
    console.log(profiles);

    return(
		<div className="out">
			<div className = "leaderboard">
				LeaderBoards
			</div>
			<div class="container">
			{profiles.map((profile) =>{
				return(
					<div className="r">
						<div className="img">
							<Avatar src = {profile.image}  />
						</div>
						<div className="info">
							{profile.name}
						</div>
					</div>
				)
			})}
			</div>
		</div>
        
    )
}

export default Leaderboard;