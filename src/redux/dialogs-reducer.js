const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

let initialState = {
    dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "wife" },
        { id: 3, name: "bro" }
    ],

    messages: [
        { id: 0, author: "me", message: "Hi" },
        { id: 1, author: "Dimych", message: "how r u" },
        { id: 2, author: "me", message: "great what's new?" },
        { id: 3, author: "Dimych", message: "let's learn React!" },
        { id: 4, author: "me", message: "Come on, let's start!" }
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            let stateCopy = {
                ...state,
                messages: [...state.messages, { id: 9, author: "me", message: body }],
                newMessageBody: ""
        };
            return stateCopy;
        }
            
        case UPDATE_NEW_MESSAGE_BODY:{
            let stateCopy = {...state,
            newMessageBody: action.body};
            return stateCopy;
        }
            

        default: return state;
    }
}

export const sendNewMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = body => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;