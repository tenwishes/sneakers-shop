import React from 'react'

function App() {
    return (
        <div className="wrapper clear">
            <div className="overlay">
                <div className="drawer">
                    <h2 className="d-flex justify-between mb-30">
                        Корзина <img className="cartClose" src="/img/close.svg" alt="Close"/>
                    </h2>
                    <div className="items">
                        <div className="cartItem d-flex align-center mb-20">
                            <img className="mr-20" width={70} height={70} src="/img/sneakers/1.png" alt="Sneakers"/>
                            <div className="mr-20">
                                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                                <b>12 999 руб.</b>
                            </div>
                            <img className="removeFromCartBtn" src="/img/removeFromCart.svg" alt="Remove"/>
                        </div>
                        <div className="cartItem d-flex align-center mb-20">
                            <img className="mr-20" width={70} height={70} src="/img/sneakers/1.png" alt="Sneakers"/>
                            <div className="mr-20">
                                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                                <b>12 999 руб.</b>
                            </div>
                            <img className="removeFromCartBtn" src="/img/removeFromCart.svg" alt="Remove"/>
                        </div>
                    </div>
                    <div className="cartTotalBlock">
                        <ul>
                            <li className="d-flex">
                                <span>Итого:</span>
                                <div></div>
                                <b>21 987 руб.</b>
                            </li>
                            <li className="d-flex">
                                <span>Налог 5%:</span>
                                <div></div>
                                <b>1074 руб.</b>
                            </li>
                        </ul>
                        <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="Arrow"/></button>
                    </div>

                </div>
            </div>
            <header className="d-flex justify-between align-center p-40">
                <div className="d-flex align-center">
                    <img width={80} height={48} src="/img/logo.svg" alt=""/>
                    <div>
                        <h2>SNKRS</h2>
                        <p>React sneakers store</p>
                    </div>
                </div>
                <ul className="d-flex">
                    <li className="mr-30">
                        <img src="/img/shoppingCart.svg" alt=""/>
                        <span>1205 руб.</span>
                    </li>
                    <li>
                        <img src="/img/user.svg" alt=""/>
                    </li>
                </ul>
            </header>
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>Все кроссовки</h1>
                    <div className="search-block">
                        <img src="/img/search.svg" alt="Search"/>
                        <input placeholder={"Поиск"}/>
                    </div>
                </div>
                <div className="d-flex">

                    <div className="card">
                        <div className="favorite">
                            <img src="/img/addFavorite.svg" alt="Favorite"/>
                        </div>
                        <img height={112} width={133} src="/img/sneakers/1.png" alt=""/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img height={11} width={11} src="/img/plus.svg" alt="Add cart"/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="favorite">
                            <img src="/img/addFavorite.svg" alt="Favorite"/>
                        </div>
                        <img height={112} width={133} src="/img/sneakers/2.png" alt=""/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img height={11} width={11} src="/img/plus.svg" alt="Add cart"/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="favorite">
                            <img src="/img/addFavorite.svg" alt="Unliked"/>
                        </div>
                        <img height={112} width={133} src="/img/sneakers/3.png" alt=""/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img height={11} width={11} src="/img/plus.svg" alt="Add cart"/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="favorite">
                            <img src="/img/addFavorite.svg" alt="Favorite"/>
                        </div>
                        <img height={112} width={133} src="/img/sneakers/4.png" alt=""/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img height={11} width={11} src="/img/plus.svg" alt="Add cart"/>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;