import React from "react";
import { useEffect } from "react";
import { useContext } from "react";

import { ShopContext } from "../../../context";

function BasketAlert() {
    const {basketAlertItemName, clearBasketAlert} = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(clearBasketAlert, 1000)

        return () => {clearTimeout(timerId)}

    // eslint-disable-next-line
    }, [basketAlertItemName])
    return (
        <div id="toast-container">
            <div className="toast">Предмет "{basketAlertItemName}" добавлен в корзину</div>
        </div>
    )
}

export {BasketAlert}