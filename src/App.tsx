import React from 'react'


function App() {
   return (
      <div className="wrapper clear">
         <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
               <img width={40} height={40} src="/img/logo.png" alt="" />
               <div className="ml-15">
                  <h3>React Sneakers</h3>
                  <p className="opacity-5">Магазин лучших кроссовок</p>
               </div>
            </div>
            <ul className="d-flex">
               <li className="mr-30">
                  <img src="/img/shoppingcart.svg" alt="" />
                  <span>1205 руб.</span>
               </li>
               <li>
                  <img src="/img/user.svg" alt="" />
               </li>
            </ul>
         </header>
         <div className="content p-40">
            <h1 className="mb-40">Все кроссовки</h1>
            <div className="d-flex">
               <div className="card">
                  <img height={112} width={133} src="/img/sneakers/1.png" alt="" />
                  <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                  <div className="d-flex justify-between aligin-center">
                     <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>12 999 руб.</b>
                     </div>
                     <button className="button">
                        <img height={11} width={11} src="/img/add.svg" alt="Add cart" />
                     </button>
                  </div>
               </div>
               <div className="card">
                  <img height={112} width={133} src="/img/sneakers/2.png" alt="" />
                  <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                  <div className="d-flex justify-between aligin-center">
                     <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>12 999 руб.</b>
                     </div>
                     <button className="button">
                        <img height={11} width={11} src="/img/add.svg" alt="Add cart" />
                     </button>
                  </div>
               </div>
               <div className="card">
                  <img height={112} width={133} src="/img/sneakers/3.png" alt="" />
                  <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                  <div className="d-flex justify-between aligin-center">
                     <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>12 999 руб.</b>
                     </div>
                     <button className="button">
                        <img height={11} width={11} src="/img/add.svg" alt="Add cart" />
                     </button>
                  </div>
               </div>
               <div className="card">
                  <img height={112} width={133} src="/img/sneakers/4.png" alt="" />
                  <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                  <div className="d-flex justify-between">
                     <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>12 999 руб.</b>
                     </div>
                     <button className="button">
                        <img height={11} width={11} src="/img/add.svg" alt="Add cart" />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;