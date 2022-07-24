import React from 'react';

type DrawerPropsType = {}

function Drawer({}: DrawerPropsType) {

    return (
        <div style={{display: "none"}} className="overlay">
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
    )
}

export {Drawer};