let rerenderEntireTree = () => {
    console.log('state is changed!')
}

let state = {
    dialogsPage: {
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
    },
    profilePage: {
        posts: [
            { id: 0, post: "It's my blog", likes: 3 },
            { id: 1, post: "I was a designer for 10 years", likes: 5 },
            { id: 2, post: "Now I'm starting to learn React", likes: 9 }
        ],
        newPostText:''
    },
    friendsPage: {
        friends: [
            {
                id: 0,
                name: "me",
                linkto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0qSOrkr1kqwdgdyuHRxwG_78gd3fX2S9SAMqPGwJQLipr_Loe&s"
            },
            {
                id: 1,
                name: "Dimych",
                linkto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBY_mo1rQhrhsQTkX3jYf4NlJ_3G373KksH8YStqpH9Ie0Mmagrg&s"
            },
            {
                id: 2,
                name: "wife",
                linkto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPaHmYCx5J4tzO1c7OSThTK5U99OsZgx2sD9VhnjTb3SeCPjrM&s"
            },
            {
                id: 3,
                name: "bro",
                linkto:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WGfX5qsWFPFmBCE-g8KRk7SS-V1HXZo2vX8dRYOw0NrhtcV6&s"
            }
            //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGsz4cwsoNq09gMJ3roiDb8rOoRAoNr1DBn3PesZh1pnstzBS&s
            //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHk85P6r1iGSHDaJ286R2Ml5oTlwJoQAAxh5Y5SBl7Ju3THMaV&s
        ]
    }
};

export const addPost = () => {
    let newPost = {
        id: 3,
        post: state.profilePage.newPostText,
        likes: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree (state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree (state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}
export default state;
