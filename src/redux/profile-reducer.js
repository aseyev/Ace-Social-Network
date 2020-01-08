import { dimychAPI, profileAPI } from '../api/api';
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    posts: [
        { id: 0, post: "It's my blog", likes: 3 },
        { id: 1, post: "It keeps few posts in global state", likes: 5 },
        { id: 2, post: "And realized by Flux principles with pure functions", likes: 9 }
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                post: action.newPostText,
                likes: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts]
            };

        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };
        case SET_STATUS:
            return { ...state, status: action.status };

        default:
            return state;
    }
};

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });

export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });

//thunk (server request)
export const getUserProfile = userId => dispatch => { 
    return dimychAPI.getUserProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    });
};

export const setStatus = status => ({ type: SET_STATUS, status });

//thunk: here setStatus is action to change State, and it should be invoked after getStatus from server
export const getStatus = userId => dispatch => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
};
//thunk: here takes 'status' from invoke, PUT it on server, and if OK, setStatus to State
export const updateStatus = status => dispatch => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
            }
    });
};

export default profileReducer;
