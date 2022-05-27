import React from "react";

function Header() {
    return(
        <nav className="blue darken-3">
            <div className="nav-wrapper">
                <a href="." className="brand-logo">FORTNITE SHOP</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="https://github.com/Shevchenko-Stanislav/fortnite-shop-react" target="_blank" rel="noreferrer">
                            Repository
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export {Header}