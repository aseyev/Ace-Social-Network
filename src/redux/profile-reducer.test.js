import profileReducer, { addPost } from './profile-reducer';
import React from 'react';

it('new post should be added', () => {
    // test data
    let action = addPost('Now let\'s add test message');
    let state = {
        posts: [
            { id: 0, post: "It's my blog", likes: 3 },
            { id: 1, post: "It keeps few posts in global state", likes: 5 },
            { id: 2, post: "And realized by Flux principles with pure functions", likes: 9 }
        ]
    };

    // action
    let newState = profileReducer(state, action);

    //expectation
    expect(newState.posts.length).toBe(4);
});

