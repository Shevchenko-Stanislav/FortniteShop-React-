import React from "react";
import { useContext } from "react";
import { BasketItem } from "./BasketItem";

import { ShopContext } from "../../context";

function BasketList() {
    const {purchases, toggleBasket} = useContext(ShopContext);

    let purchasesList;
    let totalPrice;

    if (purchases.length !== 0) {
        totalPrice = purchases.reduce((total, element) => {
            return total = total + element.price * element.quantity
        }, 0)
        purchasesList = purchases.map(item => <BasketItem {...item} key={item.id} />)
    }

    return (
        <div className="open-basket">
            <div className="white blue darken-3 basket-leveling">
                Корзина
                <i onClick={toggleBasket} className="material-icons secondary-content">close</i>
            </div>
            <ul className="collection basket-list">
                {purchasesList ? purchasesList : <div className="empty-basket">Корзина пуста!</div>}
            </ul>
            {
            purchasesList
            ? <div className="white blue darken-3 basket-leveling basket-footer">
                Сумма заказа: {totalPrice} руб.
                <button className="btn-small green darken-2">Оплатить</button>
            </div>
            : <div className="collection-item white blue darken-3 basket-leveling"></div>
            }
        </div>
        
    )
}

export { BasketList }