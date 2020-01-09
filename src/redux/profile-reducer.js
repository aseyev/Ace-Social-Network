import { dimychAPI, profileAPI } from '../api/api';
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

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
        case DELETE_POST:
            return { ...state, posts: state.posts.filter(p=>p.id !== action.postID) };
        case SAVE_PHOTO_SUCCESS:
            return { ...state, profile: {...state.profile, photos: action.photos}};

        default:
            return state;
    }
};

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export const setStatus = status => ({ type: SET_STATUS, status });
export const deletePost = postID => ({ type: DELETE_POST, postID });
export const savePhotoSuccess = photos => ({ type: SAVE_PHOTO_SUCCESS, photos });

//thunk (server request)
export const getUserProfile = userId => async(dispatch) => { 
    let response = await dimychAPI.getUserProfile(userId);
    dispatch(setUserProfile(response.data));
};


//thunk: here setStatus is action to change State, and it should be invoked after getStatus from server
export const getStatus = userId => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

//thunk: here takes 'status', received from component, PUT it on server, and if OK, setStatus to State
export const updateStatus = status => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
        }
};

//thunk: here takes file from link, received from component, PUT it on server, and if OK, setStatus to State
export const saveUserPhoto = file => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos));
        }
};

export default profileReducer;
