import React from 'react';

type HeaderPropsType = {}

function Header({}: HeaderPropsType) {
    return (
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
    );
}

export {Header};