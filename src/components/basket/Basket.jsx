import React from "react";

function Basket(props) {
    return(
        <div onClick={props.toggleBasket} className="basket green darken-1">
            <i className="material-icons">shopping_cart</i>
            <span className="purchases">{props.quantity ? props.quantity : null}</span>
        </div>
    )
}

export {Basket};