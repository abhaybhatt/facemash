export default (profiles=[],action) =>{
    switch(action.type){
        case 'CREATE':
            return [...profiles,action.payload];

        case 'FETCH':
            return action.payload;

        case 'HOTIT':
            return profiles.map((profile) => profile._id === action.payload._id ? action.payload : profile);
        
        default:
            return profiles;
    }
}