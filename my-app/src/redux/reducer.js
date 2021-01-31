import * as actionType from "./Actions/actionTypes";

const initialState = {
    flag:0,
    countries: [],
    tags: []
}

const reducer = (state = initialState, action)=>{
    if(action.type === actionType.ADD_TAG ){
        const newtags = state.tags.concat(action.tags);
        return {
            ...state,
            tags: newtags,
        }
    } else if( action.type === actionType.INIT_COUNTRIES){
        return {
            ...state,
            countries: action.countries
        }
    }
    else if( action.type === actionType.CHANGE_FLAG){
        return {
            ...state,
            flag: action.flag
        }
    }
    else if( action.type === actionType.ADD_TEXT){
        return {
            ...state,
            myText: action.myText
        }
    }
    else if( action.type === actionType.RESET_TAG){
        return {
            ...state,
            tags: []
        }
    }
    else if( action.type === actionType.ADD_ACTIVITIES){
        return {
            ...state,
            activities: action.activities,
        }
    }
    return state;
};

export default reducer;