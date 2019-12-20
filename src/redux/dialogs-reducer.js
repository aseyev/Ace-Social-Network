const SEND_MESSAGE = "SEND_MESSAGE";

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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [
                    ...state.messages,
                    { id: 9, author: "me", message: body }
                ]
            };

        default:
            return state;
    }
};

export const sendNewMessage = newMessageBody => ({
    type: SEND_MESSAGE,
    newMessageBody
});
export default dialogsReducer;
