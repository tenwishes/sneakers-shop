import React, {useEffect, useState} from 'react'
import {Card} from "./components/Card/Card";
import {Header} from "./components/Header/Header";
import {Drawer} from "./components/Drawer/Drawer";

function App() {
   const [sneakers, setSneakers] = useState([{title: '', price: 0, imageUrl: '/'}])
   const [cartItems, setCartItems] = useState([])
   const [cartOpened, setCartOpened] = useState(false)

   useEffect(() => {
      fetch('https://62dfe59798dd9c9df60987c2.mockapi.io/sneakers')
         .then((res) => {
            return res.json()
         })
         .then((json) => {
            setSneakers(json)
         })

   }, [])

   return (
      <div className="wrapper clear">
         {cartOpened && <Drawer cartItems={cartItems} closeCartOnClick={() => setCartOpened(false)}/>}
         <Header openCartOnClick={() => setCartOpened(true)}/>
         <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
               <h1>Все кроссовки</h1>
               <div className="search-block">
                  <img src="/img/search.svg" alt="Search"/>
                  <input placeholder="Поиск"/>
               </div>
            </div>

            <div className="d-flex flex-wrap justify-around">
               {sneakers.map((sneaker, index) => {
                  return (
                     <Card
                        key={index}
                        name={sneaker.title}
                        price={sneaker.price}
                        imageUrl={sneaker.imageUrl}
                     />
                  )
               })}
            </div>
         </div>
      </div>
   );
}

export default App;