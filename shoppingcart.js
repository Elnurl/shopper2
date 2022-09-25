import React, { useState } from "react";
import selectedProduct from "./shop_data";
// import SelectedCart from "./selectedCart";
import "./shoppingcart.css";
// import main, { cart } from "../main";
// import data from "../../Data";
// import Cart from "../main";
// import { useState } from "react";
// function createShopCart(kart) {
//   return (
//     <SelectedCart
//       key={kart.id}
//       id={kart.id}
//       name={kart.name}
//       price={kart.price}
//       image={kart.image}
//     />
//   );
// }

export default function Shoppingcart(props) {
  // const [arr, setArr] = useState([]);
  const [selproducts, setSelproducts] = useState(selectedProduct);
  console.log(selproducts);
  // function remvBtn(items) {
  //   setSelproducts(selproducts.filter((itemss) => itemss !== items));
  function remvBtn(items) {
    setSelproducts(selproducts.filter((itemss) => itemss !== items));
    // console.log(arr);
  }
  // const [items, setItems] = useState(selectedProduct);
  // const removeItem = (index) => {
  //   console.log(index);
  //   return (index) => {
  //     console.log(items);
  //     selectedProduct = items.filter(function (value, index, arr) {
  //       return data[` ${value}`].id !== props.id;
  //     });
  //     setItems(selectedProduct);
  //     console.log(items);
  //   };
  //   // setItems();
  // };
  // function removeBtn() {
  //   selectedProduct = selectedProduct.filter(function (value, index, arr) {
  //     return data[` ${value}`].id !== props.id;
  //   });
  //   // setArr(selectedProduct);

  // }
  return (
    <div className="shopcart">
      <div>
        <h1 className="h1">Shopping Cart {}</h1>
        <div className="selected">
          {/* {items.map(createShopCart)} */}
          {selproducts.map((items, inx) => {
            const { id, image, name, price } = items;
            return (
              <div key={inx} className="kart">
                {" "}
                <div className="img">
                  {" "}
                  <img src={image} alt=".png" /> <h4>{name}</h4>
                </div>
                <div>
                  <h4>{price}</h4>{" "}
                  <button
                    className="bttn"
                    onClick={() => {
                      remvBtn(items);
                    }}
                  >
                    {"X  "}Remove
                  </button>
                </div>
              </div>
            );
          })}
          {/* <button onClick={removeItem}>remove</button>{" "} */}
        </div>
        {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="cupon">
          <div className="cupon1">
            {" "}
            <h4>Coupon code:</h4>
            <input type="text" placeholder="  Enter cupon code*"></input>
            <button>Apply</button>
          </div>
          <div className="btn">
            <button type="button"> Update Cart</button>
          </div>
        </div>
      </div>
      <div className="costrow">
        {" "}
        <div className="Total">
          <div className="subtotal">
            Subtotal
            <p>399.99$</p>
          </div>
          <div className="tax">
            Tax
            <p>00.00$</p>
          </div>
          <div className="total">
            <h3>Total</h3>
            <p>399.99$</p>
          </div>
          <p className="p">Shipping cost calculated at Checkout *</p>
        </div>
        <button>Proceed to Checkout</button>
        <div className="coun">
          {" "}
          <a href="/"> {`< `}Continue Shopping</a>
        </div>
      </div>
    </div>
  );
}
