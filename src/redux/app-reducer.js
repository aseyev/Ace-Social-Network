
import { getAuthUserData } from './auth-reducer';
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = { 
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            
            return {
                ...state,
                initialized: true
            };

    default:
            return state;
    }
};

export const InitializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    // let promise2 = dispatch(xxx());
    // let promise3 = dispatch(yyy());
    Promise.all([promise])
        .then( ()=> {
            dispatch(InitializedSuccess())
        });
}


export default appReducer;
