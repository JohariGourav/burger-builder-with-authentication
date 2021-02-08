import actions, * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const intitialState = {
    orders: [],
    loading: false,
    purchased: false,
};

const purchaseInit = (state, action) => {
    return updateObject(state, { purchased: false });
};

const purchaseBurgerStart = (state, action) => {
    return updateObject(state, { loading: true });
};
const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, { id: action.orderId });
    return updateObject(state, {
        loading: false,
        orders: state.orders.concat(newOrder),
        purchased: true,
    });
};
const purchaseBurgerFail = (state, action) => {
    return updateObject(state, { loading: false });
};
const fetchOrdersStart = (state, action) => {
    return updateObject(state, { loading: true });
};
const fetchOrdersSuccess = (state, action) => {
    return updateObject(state, {
        orders: action.orders,
        loading: false,
    });
};
const fetchOrdersFail = (state, action) => {
    return updateObject(state, { loading: false });
};

export const reducer = (state = intitialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT: return purchaseInit(state, action);
        case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state, action);

        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state, action);
            
        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state, action);
            
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
            
        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail(state, action);
            
        default: return state;
    }
};

export default reducer;

// -> the earlier code state, before updating code with utility function
// switch(action.type) {
//     case actionTypes.PURCHASE_INIT:
//         return {
//             ...state,
//             purchased: false,
//         }
//     case actionTypes.PURCHASE_BURGER_START:
//         return {
//             ...state,
//             loading: true,
//         };
//     case actionTypes.PURCHASE_BURGER_SUCCESS:
//         const newOrder = {
//             ...action.orderData,
//             id: action.orderId,
//         }
//         return {
//             ...state,
//             loading: false,
//             orders: state.orders.concat(newOrder),
//             purchased: true,
//         };
//     case actionTypes.PURCHASE_BURGER_FAIL:
//         return {
//             ...state,
//             loading: false
//         };
//     case actionTypes.FETCH_ORDERS_START:
//         return {
//             ...state,
//             loading: true,
//         };
//     case actionTypes.FETCH_ORDERS_SUCCESS:
//         return {
//             ...state,
//             orders: action.orders,
//             loading: false,
//         };
//     case actionTypes.FETCH_ORDERS_FAIL:
//         return {
//             ...state,
//             loading: false,
//         };
//     default:
//         return state;
// }

// --> 
// the code before refactoring cases logic into their own functions

// case actionTypes.FETCH_ORDERS_FAIL:
//             return updateObject(state, { loading: false });
       