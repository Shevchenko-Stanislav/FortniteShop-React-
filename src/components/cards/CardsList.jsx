import React from "react";
import {Card} from "./Card";

function CardsList(props) {
    const CardsList = props.products.map(item => <Card
        name={item.displayName}
        id={item.mainId}
        key={item.mainId}
        description={item.displayDescription}
        photo={item.granted[0].images.background}
        price={item.price.regularPrice}
        addToBasket = {props.addToBasket}
        />
    )
    return (
        <div className="cards">
            {CardsList}
        </div>
    )
}

export { CardsList };