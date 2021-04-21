import * as api from '../api';


export const createProfile = (profile) => async(dispatch) =>{
    try{
        const {data} = await api.createProfile(profile);
        dispatch({type:'CREATE',payload:data})
        console.log('action')
    }
    catch(err){
        console.log(err);
    }
}
export const fetchProfile = () =>async(dispatch) =>{
    try{
        const {data} = await api.fetchProfiles();
        dispatch({type:'FETCH',payload:data})
    }
    catch(err){
        console.log(err);
    }
}

export const hotProfile = (id) => async(dispatch) =>{
    try{
        const{ data } = await api.hotProfile(id);

        dispatch({ type:'HOTIT',payload:data});
    }
    catch(err){
        console.log(err.message);
    }
}