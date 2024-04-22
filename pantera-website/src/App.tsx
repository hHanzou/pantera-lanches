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
            <h2>Carrinho:</h2>
            {orders.map((item, index) => (
              <div className="cart-list" key={index}>
                <h1>{item.name}</h1>
                <div
                  onClick={() => {
                    removeOrder(index);
                  }}
                >
                  X
                </div>
              </div>
            ))}
          </aside>
        </div>
        <div className="pre-footer">
          <button
            className="confirm-order"
            onClick={() => {
              setShowPopup2(true);
            }}
          >
            Confirmar Pedido
          </button>
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
