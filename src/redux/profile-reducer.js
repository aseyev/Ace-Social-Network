const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        { id: 0, post: "It's my blog", likes: 3 },
        { id: 1, post: "I was a designer for 10 years", likes: 5 },
        { id: 2, post: "Now I'm starting to learn React", likes: 9 }
    ],
    newPostText: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                post: state.newPostText,
                likes: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    } 
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = text => 
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;