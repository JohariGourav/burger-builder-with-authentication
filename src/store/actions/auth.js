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
    console.log("authSuccess dispatched");
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

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}

export const checkAuthTimeout = (expirationTime) => {
    console.log("checkAuthTimeout dispatched");
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
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
                dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {
                console.log(err);
                console.log("res eror in auth actions: ",err.response.data.error);
                dispatch(authFail(err.response.data.error));
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