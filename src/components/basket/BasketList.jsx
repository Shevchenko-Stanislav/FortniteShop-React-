import React from "react";
import { BasketItem } from "./BasketItem";

function BasketList(props) {
    let purchasesList;
    let totalPrice;

    if (props.purchases.length !== 0) {
        totalPrice = props.purchases.reduce((total, element) => {
            return total = total + element.price * element.quantity
        }, 0)
        purchasesList = props.purchases.map(item => <BasketItem
            {...item} removeItemFromBasket={props.removeItemFromBasket}
            key={item.id}
            changeQuantityOfProduct={props.changeQuantityOfProduct}
        />)
    }

    return (
        <ul className="collection basket-list">
            <li className="collection-item white blue darken-3 basket-leveling">Корзина<i onClick={props.toggleBasket} className="material-icons secondary-content">close</i></li>
            {purchasesList ? purchasesList : <div className="empty-basket">Корзина пуста!</div>}
            {
            purchasesList
            ? <li className="collection-item white blue darken-3 basket-leveling basket-footer">Сумма заказа: {totalPrice} руб. <button className="btn-small green darken-2">Оплатить</button></li>
            : <li className="collection-item white blue darken-3 basket-leveling"></li>
            }
        </ul>
    )
}

export { BasketList }