import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'});


export const createProfile = (newProfile) => API.post('/profile',newProfile);
export const fetchProfiles = () => API.get('/profile');
export const hotProfile = (id) =>API.patch(`/profile/${id}/hotProfile`);