import React from "react";
import {Card} from "./Card";
import { useContext } from "react";

import { ShopContext } from "../../context";

function CardsList() {
    const {products, addToBasket} = useContext(ShopContext);

    const CardsList = products.map(item => <Card
        name={item.displayName}
        id={item.mainId}
        key={item.mainId}
        description={item.displayDescription}
        photo={item.granted[0].images.background}
        price={item.price.regularPrice}
        addToBasket = {addToBasket}
        />
    )
    return (
        <div className="cards">
            {CardsList}
        </div>
    )
}

export { CardsList };