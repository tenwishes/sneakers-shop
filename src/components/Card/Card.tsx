import React, {useState} from 'react';
import styles from './Card.module.scss'

type CardPropsType = {
    name: string
    price: number
    imageUrl: string
    // onClickAddCart: () => void
    // onClickAddFavorite: () => void
}

function Card({name, price, imageUrl}: CardPropsType) {
    const [isAdded, setIsAdded] = useState<boolean>(false)

    const onClickAddCart = () => {
        setIsAdded(!isAdded)
    }
    const onClickAddFavorite = () => {

    }
    return (
        <div className={styles.card}>
            <img className={styles.favorite} onClick={onClickAddFavorite} src="/img/addFavorite.svg" alt="Favorite"/>
            <img height={112} width={133} src={imageUrl} alt=""/>
            <h5>{name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img className={styles.plus} onClick={onClickAddCart} src={isAdded ? "/img/addedCart.svg": "/img/addCart.svg"} alt="Add cart"/>
            </div>
        </div>
    );
}

export {Card}
