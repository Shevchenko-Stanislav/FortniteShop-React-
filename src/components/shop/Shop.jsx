import React from "react";
import { useEffect, useContext } from "react";

import { ShopContext } from "../../context";

import { getData } from "../../services/getData";
import { Preloader } from "../preloader/Preloader";
import { CardsList } from "../cards/CardsList";
import { Basket } from "../basket/Basket";
import { BasketList } from "../basket/BasketList";
import { BasketAlert } from "../basket/BasketAlert/BasketAlert";

function Shop() {
    const {loading, isBasketOpen, basketAlertItemName, setProducts} = useContext(ShopContext);

    function getProducts() {
        getData().then(products => {
            setProducts(products);
        })
    }
    // eslint-disable-next-line
    useEffect(getProducts, [])
    
    return(
        <main className="content container">
            <Basket  />
            {loading ? <Preloader /> : <CardsList />}
            {isBasketOpen ? <BasketList /> : null}
            {(basketAlertItemName && !isBasketOpen) ? <BasketAlert /> : null}
        </main>
    )
}

export {Shop}