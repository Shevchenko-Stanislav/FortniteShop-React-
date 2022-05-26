import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context";

function BasketItem(props) {
    const {removeItemFromBasket, changeQuantityOfProduct} = useContext(ShopContext);

    function increaseQuantity () {
        const increaseFlag = true;
        changeQuantityOfProduct(props.id, increaseFlag)
    }

    function decreaseQuantity () {
        const increaseFlag = false;
        changeQuantityOfProduct(props.id, increaseFlag)
    }

    function removeItem() {
        removeItemFromBasket(props.id)
    }
    return (
        <li className="collection-item">
            <div className="item-wrap">
                {props.name} 
                <div className="item-quantity">
                    <i className="material-icons green darken-1 change-quantity-icon" onClick={increaseQuantity}>add</i>
                        {props.quantity} 
                    <i className="material-icons green darken-1 change-quantity-icon" onClick={decreaseQuantity}>remove</i>
                </div>
                <div className="delete">
                    <i onClick={removeItem} className="material-icons delete_forever">delete_forever</i>
                </div>
            </div>
        </li>
    )
}

export { BasketItem }