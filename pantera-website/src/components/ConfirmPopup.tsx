import "./ConfirmPopup.css";
import { order } from "../App";

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
  const formatAddToCart = (str: string) => {
    str = str.slice(0, -1);
    return "(" + str + ")";
  };
  const totalPrice = () => {
    let total = 0;
    orders.map((item) => {
      total += parseFloat(item.price.split(" ")[1].replace(",", "."));
      total += item.priceAdd ? item.priceAdd : 0;
    });
    return total;
  };

  const formatToMessage = () => {
    // e.add ? text += `(${e.add})\r\n` : null;
    let text = "";
    orders.map((e) => {
      text += `${e.name} `;
      if (e.add) {
        let temp = e.add.slice(0, -1);
        text += `(${temp})\r\n`;
      } else {
        text += "\r\n";
      }
    });
    console.log(text);
    const url_text = encodeURIComponent(text);
    const whats = `https://api.whatsapp.com/send?phone=554197804023&text=${url_text}`;
    window.location.href = whats;
    console.log(whats);
  };

  if (showPopup2) {
    return (
      <div className="modal-background2">
        <div className="modal-style2">
          <div className="modal-container2">
            <div className="order-list">
              {orders.map((item, index) => (
                <div className="item-box" key={index}>
                  <div className="name-row">
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </div>
                  {item.priceAdd !== undefined && item.priceAdd > 0 ? (
                    <div className="add-row">
                      <span className="add-txt">
                        {item.add ? formatAddToCart(item.add) : null}
                      </span>
                      <span>
                        {item.priceAdd.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </span>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="price-row">
              <h1>{`Total: ${totalPrice().toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}`}</h1>
            </div>
            <div className="buttons-row">
              <button onClick={() => setShowPopup2(false)}>Cancelar</button>
              <button onClick={() => formatToMessage()}>Confirmar</button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
