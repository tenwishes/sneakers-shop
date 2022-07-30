import React from 'react';
import styles from './Header.module.scss'

type HeaderPropsType = {
   openCartOnClick: any
}

function Header({openCartOnClick}: HeaderPropsType) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={80} height={48} src="/img/logo.svg" alt=""/>
                <div>
                    <h2 className={styles.logoText}>SNKRS</h2>
                </div>
            </div>
            <ul className="d-flex">
                <li onClick={() => openCartOnClick(true)} className="mr-30 cu-p">
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