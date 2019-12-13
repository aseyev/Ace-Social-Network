import { dimychAPI } from '../api/api';
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

let initialState = {
    users: [],
    pageSize: 40,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false, //show preloader while data loading
    followingInProgress: [] //disable 'follow' button of user, who's ID in array, while his data loading
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true };
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false };
                    }
                    return u;
                })
            };

        case SET_USERS: {
            return { ...state, users: action.users };
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage };
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount };
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching };
        }
        case TOGGLE_FOLLOWING_PROGRESS: {
            return { ...state, 
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id!== action.userId)
            };
        }

        default:
            return state;
    }
};
//export of functions - action-creators to components
//these AC-functions just give a class to 
export const followUser = userId => ({ type: FOLLOW, userId });
export const unfollowUser = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId });


//getUsersThunkCreator
export const getUsers = (currentPage, pageSize) => { 
    return ( dispatch ) => {
        dispatch( toggleIsFetching( true ) );
            dimychAPI.getUsers( currentPage, pageSize ) 
                .then( data => {
                    dispatch( toggleIsFetching( false ) );
                    dispatch( setUsers( data.items ) );
                    dispatch( setTotalUsersCount( data.totalCount ) );
                })
    }
}

//followUserThunkCreator
export const follow = ( userId ) => { 
    return ( dispatch ) => {
        dispatch( toggleFollowingProgress( true, userId ));
        dimychAPI.followUser( userId )
        .then( data => {
            if ( data.resultCode === 0 ) {
                dispatch( followUser( userId ) )
            }
            dispatch( toggleFollowingProgress( false, userId ) );
        });
    }
}
// unfollowUserThunkCreator
export const unfollow = ( userId ) => { 
    return ( dispatch ) => {
        dispatch( toggleFollowingProgress( true, userId ));
        dimychAPI.unfollowUser( userId )
        .then( data => {
            if ( data.resultCode === 0 ) {
                dispatch( unfollowUser( userId ) )
            }
            dispatch( toggleFollowingProgress( false, userId ) );
        });
    }
}


export default usersReducer;
