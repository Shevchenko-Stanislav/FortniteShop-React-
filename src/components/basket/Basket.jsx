import React from "react";
import { useContext } from "react";

import { ShopContext } from "../../context";

function Basket() {
    const {purchases ,toggleBasket} = useContext(ShopContext);
    const quantity = purchases.length;

    return(
        <div onClick={toggleBasket} className="basket green darken-1">
            <i className="material-icons">shopping_cart</i>
            <span className="purchases">{quantity ? quantity : null}</span>
        </div>
    )
}

export {Basket};