import * as actionTypes from './actionTypes';
import axios from 'axios';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENTS,
        ingredientName: name,
    }
};

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};
export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        // authData: authData,
        idToken: token,
        userId: userId,
    };
};
export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    };
};
export const auth = (email, password, isSignup) => {
    return dispatch => {
        // ... authenticate the user
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true,
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBvOtKBHbjMAToZso8WLRgxvHxjKdxDWlQ';
        if(!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBvOtKBHbjMAToZso8WLRgxvHxjKdxDWlQ';
        }
        axios.post(url, authData)
            .then( response => {
                console.log(response);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            })
    };
};

// return dispatch => {
//     axios.get('https://react-my-burger-gj.firebaseio.com/ingredients.json')
//         .then(response => {
//             // console.log("response axios: ", response);
//             dispatch(setIngredients(response.data));
//         })
//         .catch(error => {
//             // console.log("error axios: ", error);
//             dispatch(fetchIngredientsFailed());
//         });
// };