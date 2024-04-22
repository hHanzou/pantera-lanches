import "./ConfirmPopup.css";
import { order } from "../App";
import { menu } from "../data/menu";

type PopupType2 = {
  showPopup2: boolean;
  setShowPopup2: React.Dispatch<React.SetStateAction<boolean>>;
  orders: [] | order[];
};

export const ConfirmPopup: React.FC<PopupType2> = ({
  showPopup2,
  setShowPopup2,
  orders,
}) => {
  const totalPrice = () => {
    let total = 0;
    orders.map((item) => {
      total += parseFloat(item.price.split(" ")[1].replace(",", "."));
      total += item.priceAdd ? item.priceAdd : 0;
    });
    return total;
  };
  const addStr = (str: string) => {
    let newStr = "";
    const strArr = str.split(",").filter((str) => str.length > 0);
    for (let i = 0; i < strArr.length; i++) {
      newStr += strArr[i];
      if (i !== strArr.length - 1) {
        newStr += " - ";
      }
    }
    return newStr;
  };
  if (showPopup2) {
    return (
      <div className="modal-background2">
        <div className="modal-style2">
          <div className="modal-container2">
            <div className="order-list"></div>
            <div>
              {orders.map((item, index) => (
                <div className="order-list" key={index}>
                  <h1>{item.name}</h1>
                  <div>
                    <h1>{item.price}</h1>
                    {item.priceAdd !== undefined && item.priceAdd > 0 ? (
                      <h1>
                        {item.priceAdd.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </h1>
                    ) : null}
                  </div>
                  <h1>{item.add ? addStr(item.add) : null}</h1>
                </div>
              ))}
              <h1>{`TOTAL: ${totalPrice().toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}`}</h1>
              <button onClick={() => setShowPopup2(false)}>Cancelar</button>
              <button>Confirmar</button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
