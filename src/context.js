import { createContext } from 'react';
import { useReducer } from 'react';
import { ShopReducer } from './reducer';
import { constants } from './constants';

export const ShopContext = createContext();

const initialState = {
    products: [],
    loading: true,
    purchases: [],
    isBasketOpen: false,
    basketAlertItemName: ''
};

export const ContextProvider = ({children}) => {

    const [value, dispatch] = useReducer(ShopReducer, initialState);

    value.clearBasketAlert = () => {
        dispatch({type: constants.CLEAR_BASKET_ALERT})
    }
    
    value.removeItemFromBasket = (productId) => {
        dispatch({type: constants.REMOVE_ITEM_FROM_BASKET, payload: {id: productId}})
    }

    value.toggleBasket = () => {
        dispatch({type: constants.TOGGLE_BASKET})
    }

    value.changeQuantityOfProduct = (productId, increaseFlag) => {
        dispatch({
            type: constants.CHANGE_QUANTITY_OF_PRODUCT, 
            payload: {
                id: productId,
                flag: increaseFlag
            }
        })
    }

    value.addToBasket = (item) => {
        dispatch({type: constants.ADD_TO_BASKET, payload: {item}})
    }

    value.setProducts = (products) => {
        dispatch({type: constants.SET_PRODUCTS, payload: {products: products}})
    }

    return (
    <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
    )
}