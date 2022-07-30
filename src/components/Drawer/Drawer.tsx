import React from 'react';
import styles from './Drawer.module.scss'

type ItemType = {
    title: string
    price: number
    imageUrl: string
}

type DrawerPropsType = {
    closeCartOnClick: any
    cartItems: Array<ItemType>
}

function Drawer({closeCartOnClick, cartItems}: DrawerPropsType) {

    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <h2 className="d-flex justify-between mb-30">
                    Корзина <img onClick={() => closeCartOnClick(false)} className={styles.close} src="/img/close.svg" alt="Close"/>
                </h2>
                {
                    cartItems.map((i) => {
                        return (
                           <div className={styles.items}>
                               <div className={styles.cartItem + " d-flex align-center mb-20"}>
                                   <img className="mr-20" width={70} height={70} src={i.imageUrl} alt="Sneakers"/>
                                   <div className="mr-20">
                                       <p className="mb-5">{i.title}</p>
                                       <b>{i.price}</b>
                                   </div>
                                   <img className={styles.removeItemBtn} src="/img/removeFromCart.svg" alt="Remove"/>
                               </div>
                           </div>
                        )
                    })
                }
                <div className={styles.total}>
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
                    <button className={styles.completeBtn}>Оформить заказ<img src="/img/arrow.svg" alt="Arrow"/></button>
                </div>
            </div>
        </div>
    )
}

export {Drawer};