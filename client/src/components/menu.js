import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './menu.css';
import { useHistory } from "react-router-dom";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleHome = () => {
    setAnchorEl(null);
    history.push('/');
  };

  const handleleaderboard = () => {
    setAnchorEl(null);
    history.push('/leaderboard');
  };

  const handleform = () => {
    setAnchorEl(null);
    history.push('/form');
  };

  return (
    <div>
      <Button   aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <div className="menu1">Menu</div> 
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={()=> setAnchorEl(null)}
      >
        <MenuItem onClick={handleHome}>Home</MenuItem>
        <MenuItem onClick={handleleaderboard}>Leaderboard</MenuItem>
        <MenuItem onClick={handleform}>Add a image</MenuItem>
      </Menu>
    </div>
  );
}
