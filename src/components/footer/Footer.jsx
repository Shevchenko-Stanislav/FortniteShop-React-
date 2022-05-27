import React from "react";

function Footer() {
    return (
        <footer className="page-footer blue darken-3">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" 
                    href="https://github.com/Shevchenko-Stanislav/fortnite-shop-react"
                    target="_blank" rel="noreferrer">
                        Repository
                    </a>
                </div>
            </div>
        </footer>
    )
}

export { Footer }