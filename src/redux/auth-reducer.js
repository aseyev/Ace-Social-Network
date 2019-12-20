import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
const SET_USER_DATA = "SET_USER_DATA";

// API: {"data":{"id":5434,"login":"0nton","email":"dunkip24@gmail.com"},"messages":[],"resultCode":0}
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
                data: action.payload,
                isAuth: action.payload.isAuth
            };

    default:
            return state;
    }
};

export const setAuthUserData = (id, login, email, isAuth) => ({ type: SET_USER_DATA, payload: 
    {id, login, email, isAuth} });

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
    .then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    })
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
    .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
            dispatch(stopSubmit('login', {_error: message}));
        }
    })
}
export const logout = () => (dispatch) => {
    authAPI.logout()
    .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    })
}

export default authReducer;
