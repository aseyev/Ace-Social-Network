const SET_USER_DATA = "SET_USER_DATA";

// {"data":{"id":5434,"login":"0nton","email":"dunkip24@gmail.com"},"messages":[],"resultCode":0}
let initialState = { 
    data:{
        id: null,
        login: null,
        email: null
    },
    messages:[],
    resultCode:0,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            
            return {
                ...state,
                data: action.data,
                isAuth: true
                 // data from here (second line) will rewrite existed properties with same name
            };

    default:
            return state;
    }
};
//export of functions - action-creators to components
//these AC-functions just give a class to 
export const setAuthUserData = (id, login, email) => ({ type: SET_USER_DATA, data: {id, login, email} });

export default authReducer;
