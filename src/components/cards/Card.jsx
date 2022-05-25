import React from "react";

function Card(props) {
    
    function BuyItem() {
        const item = {
            id: props.id,
            name: props.name,
            price: props.price
        }
        props.addToBasket(item);
    }

    return (
        <div className="card">
            <div className="card-image">
                <img src={props.photo} alt="test" />
            </div>
            <div className="card-content">
                <a href="#!" className="card-title">{props.name}</a>
                <p>{props.description ? props.description : "Нет описания :("}</p>
            </div>
            <div className="card-action">
                <button href="#!" onClick={BuyItem} className="waves-effect waves-light btn-small green darken-2">Купить</button>
                <span>{props.price} руб.</span>
            </div>
        </div>
    )
}

export { Card };