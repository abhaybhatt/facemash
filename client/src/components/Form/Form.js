import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './style';
import { createProfile } from '../../actions/profiles';

const Form = () => {
  const [profileData, setProfileData] = useState({  name: '', year: '', branch: '', image: '' });
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleSubmit =  (e) => {
    e.preventDefault();

    dispatch(createProfile(profileData));
    clear();
  };

  const clear = () => {
    setProfileData({  name: '', year: '', branch: '', image: '' });
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Add a profile</Typography>
        <TextField name="name" variant="outlined" label="Name" fullWidth value={profileData.name} onChange={(e) => setProfileData({ ...profileData, name: e.target.value })} />
        <TextField name="year" variant="outlined" label="Year" fullWidth value={profileData.year} onChange={(e) => setProfileData({ ...profileData, year: e.target.value })} />
        <TextField name="branch" variant="outlined" label="Branch" fullWidth value={profileData.branch} onChange={(e) => setProfileData({ ...profileData, branch: e.target.value})} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setProfileData({ ...profileData, image: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;