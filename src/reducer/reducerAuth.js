//2- Create Reducer to set state and change it

export const reducerAuth = (state = {isLog:false}, action) => {

    if(action.type==='IsLogin'){
        return{isLog:true}
    }
    if(action.type==='NotLogin'){
        return{isLog:false}
    }
    return state;


};
