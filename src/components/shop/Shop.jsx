import React from "react";
import { useState, useEffect } from "react";
import { getData } from "../../services/getData";
import { Preloader } from "../preloader/Preloader";
import { CardsList } from "../cards/CardsList";
import { Basket } from "../basket/Basket";
import { BasketList } from "../basket/BasketList";
import { BasketAlert } from "../basket/BasketAlert/BasketAlert";

function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [purchases, setPurchases] = useState([]);
    const [isBasketOpen, setBasketWindow] = useState(false);
    const [basketAlertItemName, setBasketAlertItemName] = useState('');

    function clearBasketAlert() {
        setBasketAlertItemName('')
    }

    function toggleBasket() {
        setBasketWindow(!isBasketOpen);
    }

    function changeQuantityOfProduct(productId, increaseFlag) {
        const newPurchases = purchases.map(item => {
            if (item.id === productId) {
                if (increaseFlag) {
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
        setPurchases(newPurchases);
    }

    function removeItemFromBasket(productId) {
        const newPurchases = purchases.filter(item => item.id !== productId);
        setPurchases(newPurchases);
    }

    function addToBasket(item) {
        const purchaseItemIndex = purchases.findIndex(element => element.id === item.id);
        let purchaseItem = {
            ...item,
            quantity: 1
        }

        if (purchaseItemIndex === -1) {
            setPurchases([...purchases, purchaseItem])
        } else {
            const newPurchases = purchases.map(el => {
                if(el.id === item.id) {
                    return el = {...el, quantity: el.quantity + 1}
                } else {
                    return el
                }
            })
            setPurchases(newPurchases);
        }
        setBasketAlertItemName(item.name)
    }

    function getProducts() {
        getData().then(propducts => {
            setProducts(propducts);
            setLoading(false);
            console.log(propducts)
        })
    }

    useEffect(getProducts, [])
    
    return(
        <main className="content container">
            <Basket quantity={purchases.length} toggleBasket={toggleBasket}/>
            {loading ? <Preloader /> : <CardsList products={products} addToBasket={addToBasket}/>}
            {isBasketOpen
            ? <BasketList
                toggleBasket={toggleBasket} 
                purchases={purchases} 
                removeItemFromBasket={removeItemFromBasket} changeQuantityOfProduct={changeQuantityOfProduct}/> 
            : null}
            {basketAlertItemName ? <BasketAlert name={basketAlertItemName} clearBasketAlert={clearBasketAlert}/> : null}
        </main>
    )
}

export {Shop}