import { createContext, useState } from 'react';
import axios from 'axios';

export const ShoppingContext = createContext ()

const initialDb = { 
  products: [
          {
            id: 1,
            image: "/menu/cafe-expreso.webp",
            name: "Café Expresso",
            description: "Descripción: Un café concentrado preparado forzando agua caliente a alta presión a través de café finamente molido. Características: Intensidad y sabor robusto.",
            category: "cafe",
            price: 30
          },
          {
            id: 2,
            image: "/menu/cafe-americano.webp",
            name: "Café Americano",
            description: "Descripción: Espresso al que se le añade agua caliente.Características: Menos intenso que un espresso, similar al café filtrado.",
            category: "cafe",
            price: 25
          },
          {
            id: 3,
            image: "/menu/cafe-capuchino.webp",
            name: "Capuchino",
            description: "Descripción: Igual proporción de espresso,leche vaporizada y espuma de leche. Características: Textura cremosa y equilibrio entre café y leche.",
            category: "cafe",
            price: 20
          }
        ],
  cart: []
};

const ENDPOINTS = {
    products: `http://localhost:5000/products`, 
    cart: `http://localhost:5000/cart`
}

const ShoppingContextProvider = (props) => {

  const [db, setDb] = useState (initialDb);
  const {products, cart} = db; 
  const [infoCartState, setInfoCartState] = useState({ ItemsInCart: 0, TotalCartPrice: 0 });

  const READ_DATA = async () => {
    const responseProducts = await axios.get(ENDPOINTS.products), 
      responseCart = await axios.get(ENDPOINTS.cart);

      console.log(responseProducts.data)

    const productsList = await responseProducts.data,
      cartList = await responseCart.data;    

    const { ItemsInCart, TotalCartPrice } = cartList.reduce((accumulator, item) => {
      const qty = parseInt(item.qty, 10);
      const price = parseInt(item.price, 10)
      accumulator.ItemsInCart += qty;
      accumulator.TotalCartPrice += qty * price;
      return accumulator;
    }, { ItemsInCart: 0, TotalCartPrice: 0 });

    setInfoCartState({ ItemsInCart, TotalCartPrice });

    const data = {
        products: productsList,
        cart: cartList,
    };

    setDb(data)
  };

  const CREATE_ITEM_IN_CART = async (item) => {
    const newItem = {...item, qty: item.qty = 1 }

    const OPTIONS = {
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      data: JSON.stringify(newItem)
    }

    const ENDPOINT = ENDPOINTS.cart
    await axios(ENDPOINT, OPTIONS);

    READ_DATA();
  };

  const UPDATE_ITEM_IN_CART = async (itemIsInCart) => {
    let id = itemIsInCart.id;
    itemIsInCart.qty = itemIsInCart.qty + 1;

    const OPTIONS = {
      method: "PUT",
      headers: { "Content-Type" : "application/json" },
      data: JSON.stringify(itemIsInCart) 
    }

    const ENDPOINT = `${ENDPOINTS.cart}/${itemIsInCart.id}`
    console.log(ENDPOINT)
    await axios(ENDPOINT , OPTIONS);

    READ_DATA();
  };

  const ADD_ITEM_TO_CART = async (idSelected) => {
    const item = db.products.find(product => product.id === idSelected);
    if (!item) { console.log("Error - Item Selected Doesn't Exist")}
    else {
      const itemIsInCart = db.cart.find(item => item.id === idSelected)
      itemIsInCart
        ? UPDATE_ITEM_IN_CART(itemIsInCart) 
        : CREATE_ITEM_IN_CART(item);
      }
  };

  const DELETE_ITEM_IN_CART = async (idSelected) => {
    const itemToDelete = db.cart.find(item => item.id === idSelected)
    if (!itemToDelete) { console.log("Error - Card Selected Doesn't Exist")}
    else {
      let id = itemToDelete.id;
      
      const OPTIONS = {
        method: "DELETE",
        headers: { "Content-Type" : "application/json" },
      }

      const ENDPOINT = `${ENDPOINTS.cart}/${id}`
      await axios(ENDPOINT , OPTIONS);
    };

    READ_DATA();
  };


  const DELETE_ONE_ITEM_IN_CART = async (idSelected) => {
    const itemToDelete = db.cart.find(item => item.id === idSelected)
    if (!itemToDelete) { console.log("Error - Card Selected Doesn't Exist")}
    else {
      let id = itemToDelete.id;
      itemToDelete.qty = itemToDelete.qty - 1;
      
      const OPTIONS = {
        method: "PUT",
        headers: { "Content-Type" : "application/json" },
        data: JSON.stringify(itemToDelete) 
      }

      const ENDPOINT = `${ENDPOINTS.cart}/${id}`
      await axios(ENDPOINT , OPTIONS);
    };

    READ_DATA();
  };

  const value = {db, READ_DATA, ADD_ITEM_TO_CART, DELETE_ITEM_IN_CART, DELETE_ONE_ITEM_IN_CART, infoCartState};

  return (
    <ShoppingContext.Provider value = {value} >
        {props.children}
    </ShoppingContext.Provider>
  )
}

export default ShoppingContextProvider