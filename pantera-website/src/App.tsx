import "./App.css";
import { useState } from "react";
import { menu } from "./data/menu";
import { MenuForm } from "./components/menuForm";
import { Popup } from "./components/Popup";
import { ConfirmPopup } from "./components/ConfirmPopup";
import PanteraLogo from "./assets/pantera-logo.png";

export type order = {
  id?: number;
  price: string;
  name: string;
  description: string;
  type: string;
  priceAdd?: number;
  add?: string;
};

function App() {
  const [orders, setOrders] = useState<order[] | []>([]);
  const [popupContent, setPopupContent] = useState<order | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  const removeOrder = (indexToRemove: number) => {
    setOrders((prevOrders) => {
      return prevOrders.filter((_, index) => index !== indexToRemove);
    });
  };

  const totalPrice = () => {
    let total = 0;
    orders.map((item) => {
      total += parseFloat(item.price.split(" ")[1].replace(",", "."));
      total += item.priceAdd ? item.priceAdd : 0;
    });
    return total;
  };

  const formatAddToCart = (str: string) => {
    str = str.slice(0, -1);
    console.log(str);
    return "(" + str + ")";
  };

  const priceAndAddSum = (p: string, a: number) => {
    let price = parseFloat(p.split(" ")[1]);
    console.log("MACARENAAAAA " + price);
    return (price + a).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  // function removeOrder(index: number) {
  //   const copyOrders = orders;
  //   copyOrders.splice(index, 1);
  //   console.log(copyOrders);
  //   setOrders(copyOrders);
  // }
  return (
    <>
      <header>
        <img src={PanteraLogo} alt="pantera-logo" />
      </header>
      <main>
        <div className="box-shops">
          <section>
            <MenuForm
              menu={menu}
              orders={orders}
              setOrders={setOrders}
              setPopupContent={setPopupContent}
              setShowPopup={setShowPopup}
            ></MenuForm>
          </section>
          <aside>
            <div>
              <div className="cart-title">Carrinho:</div>
              <div className="cart-list">
                {orders.map((item, index) => (
                  <div className="cart-item" key={index}>
                    <div>
                      <div className="cart-row">
                        <div className="item-part">{item.name}</div>
                        <div className="cart-item-price">
                          {item.priceAdd
                            ? priceAndAddSum(item.price, item.priceAdd)
                            : item.price}
                        </div>
                      </div>
                      <div className="item-part item-adds">
                        {item.add ? formatAddToCart(item.add) : "..."}
                      </div>
                    </div>
                    <div
                      className="remove grid-item"
                      onClick={() => {
                        removeOrder(index);
                      }}
                    >
                      X
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="cart-bottom">
              <div className="total-div">
                <div className="cart-total">Total:</div>
                <div className="cart-price">
                  {totalPrice().toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </div>
              </div>
              <div className="button-div">
                <button
                  className="confirm-order"
                  onClick={() => {
                    setShowPopup2(true);
                  }}
                >
                  Confirmar Pedido
                </button>
              </div>
            </div>
          </aside>
        </div>
        <footer>FOOOOTER</footer>
      </main>
      <Popup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        popupContent={popupContent}
        orders={orders}
        setOrders={setOrders}
      ></Popup>
      <ConfirmPopup
        orders={orders}
        showPopup2={showPopup2}
        setShowPopup2={setShowPopup2}
      ></ConfirmPopup>
    </>
  );
}

export default App;
