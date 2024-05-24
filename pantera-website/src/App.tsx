import "./App.css";
import { useEffect, useState } from "react";
import { menu } from "./data/menu";
import { MenuForm } from "./components/menuForm";
import { Popup } from "./components/Popup";
import { ConfirmPopup } from "./components/ConfirmPopup";
import PanteraLogo from "./assets/pantera-logo.png";
import shopCart from "./assets/shopcart.svg";
import whatsappIcon from "./assets/whatsapp.svg";

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
    return "(" + str + ")";
  };

  const priceAndAddSum = (p: string, a: number) => {
    let price = parseFloat(p.split(" ")[1]);
    return (price + a).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const goToWhatsapp = () => {
    const whats = `https://api.whatsapp.com/send?phone=554197804023&text=`;
    window.location.href = whats;
  };

  function offScroll() {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = "hidden";
    }
  }

  function onScroll() {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = "auto";
    }
  }

  useEffect(() => {
    if (showPopup || showPopup2) {
      offScroll();
    } else {
      onScroll();
    }
  }, [showPopup, showPopup2]);
  return (
    <>
      <header>
        <img src={PanteraLogo} alt="pantera-logo" />
      </header>
      <div className="white-container"></div>
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
              <div className="cart-title">
                <img src={shopCart} alt="shopcart" className="shopcart" />
                Carrinho:
              </div>
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
        <footer>
          <div className="footer-column">
            <div className="caller">Entre em contato via whatsapp:</div>
            <div onClick={goToWhatsapp} className="whatsapp-row">
              <img src={whatsappIcon} alt="whatsappIcon" className="whatsapp" />
              (41) 997XX-XXXX
            </div>
          </div>
        </footer>
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
