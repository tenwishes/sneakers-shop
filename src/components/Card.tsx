import React from 'react';

type CardPropsType = {}

function Card({}: CardPropsType) {
    return (
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
    );
}

export {Card}
