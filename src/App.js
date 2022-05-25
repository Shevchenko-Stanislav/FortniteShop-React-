import React from 'react';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Shop } from './components/shop/Shop';
import { ContextProvider } from './context';
import './App.css';

function App () {
    return(
        <div>
            <Header />
            <ContextProvider>
                <Shop />
            </ContextProvider>
            <Footer />
        </div>
    )
}

export default App;



