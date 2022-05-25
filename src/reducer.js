import { constants } from "./constants";

function ShopReducer (state, action) {
    switch(action.type) {
        case constants.CLEAR_BASKET_ALERT:
            return {
                ...state,
                basketAlertItemName: ''
            }
        case constants.REMOVE_ITEM_FROM_BASKET:
            return {
                ...state,
                purchases: state.purchases.filter(item => item.id !== action.payload.id)
            }
        case constants.TOGGLE_BASKET:
            return {
                ...state,
                isBasketOpen: !state.isBasketOpen
            }
        case constants.CHANGE_QUANTITY_OF_PRODUCT:
            return {
                ...state,
                purchases: state.purchases.map(item => {
                    if (item.id === action.payload.id) {
                        if (action.payload.flag) {
                            return {...item, quantity: item.quantity + 1}
                        } else {
                            if (item.quantity !== 1) {
                                return {...item, quantity: item.quantity -1}
                            } else {
                                return item
                            }
                        }
                    } else {
                        return item
                    }
                })
            }
        case constants.ADD_TO_BASKET:
            const purchaseItemIndex = state.purchases.findIndex(element => element.id === action.payload.item.id);
            let purchaseItem = {
                ...action.payload.item,
                quantity: 1
            }

        if (purchaseItemIndex === -1) {
            return {
                ...state,
                purchases: [...state.purchases, purchaseItem]
            }
        } else {
            return {
                ...state,
                purchases: state.map(el => {
                    if(el.id === action.payload.item.id) {
                        return el = {...el, quantity: el.quantity + 1}
                    } else {
                        return el
                    }
                }),
                alertName: action.payload.item.name
            }
        }

        case constants.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload.products || [],
                loading: false
            }
        default:
            return state
    }
}

export {ShopReducer}