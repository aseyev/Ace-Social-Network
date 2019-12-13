import { dimychAPI } from "../api/api";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [
        { id: 0, post: "It's my blog", likes: 3 },
        { id: 1, post: "I was a designer for 10 years", likes: 5 },
        { id: 2, post: "Now I'm starting to learn React", likes: 9 }
    ],
    newPostText: "",
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                post: state.newPostText,
                likes: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ""
            };

        case UPDATE_NEW_POST_TEXT:
            return { ...state, newPostText: action.newText };
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = text => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export const getUserProfile = userId => dispatch => {
    //({type: SET_USER_PROFILE, userId});
    return dimychAPI.getUserProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    });
};

export default profileReducer;
