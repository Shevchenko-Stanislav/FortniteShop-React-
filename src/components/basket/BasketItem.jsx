import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context";

function BasketItem(props) {

    const {test} = useContext(ShopContext);
    console.log(test)
    function increaseQuantity () {
        const increaseFlag = true;
        props.changeQuantityOfProduct(props.id, increaseFlag)
    }

    function decreaseQuantity () {
        const increaseFlag = false;
        props.changeQuantityOfProduct(props.id, increaseFlag)
    }

    function removeItem() {
        props.removeItemFromBasket(props.id)
    }
    return (
        <li className="collection-item">
            <div className="item-wrap">
                {props.name} x 
                <div className="item-quantity">
                    <button onClick={increaseQuantity}>+</button> {props.quantity} <button onClick={decreaseQuantity}>-</button>
                </div>
                <div className="delete">
                    <i onClick={removeItem} className="material-icons delete_forever">delete_forever</i>
                </div>
            </div>
        </li>
    )
}

export { BasketItem }