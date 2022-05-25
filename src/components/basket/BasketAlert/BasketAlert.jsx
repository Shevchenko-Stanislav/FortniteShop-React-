import React from "react";
import { useEffect } from "react";

function BasketAlert(props) {
    useEffect(() => {
        const timerId = setTimeout(props.clearBasketAlert, 1000)

        return () => {clearTimeout(timerId)}
    // eslint-disable-next-line
    }, [props.name])
    return (
        <div id="toast-container">
            <div className="toast">Предмет "{props.name}" добавлен в корзину</div>
        </div>
    )
}

export {BasketAlert}