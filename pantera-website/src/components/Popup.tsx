import "./Popup.css";
import { order } from "../App";
import { menu } from "../data/menu";

type PopupType = {
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  popupContent: order | null;
  orders: [] | order[];
  setOrders: React.Dispatch<React.SetStateAction<[] | order[]>>;
};

export const Popup: React.FC<PopupType> = ({
  showPopup,
  setShowPopup,
  popupContent,
  orders,
  setOrders,
}) => {
  function pushOrder(newOrder: order) {
    setOrders([...orders, newOrder]);
  }
  if (showPopup) {
    return (
      <div className="modal-background">
        <div className="modal-style">
          <div className="modal-container">
            <div>
              {popupContent != null && (
                <div>
                  {popupContent.name}
                  <p>{popupContent.description}</p>
                  {menu.map((item) => (
                    <div key={item.id}>
                      {item.type === "Add" &&
                        (popupContent.type === "Burguer" ||
                          popupContent.type === "Dog") && (
                          <div>
                            <label>{item.name}</label>
                            <input
                              type="number"
                              name={item.name}
                              id={item.id.toString()}
                              defaultValue={0}
                              min={0}
                              max={20}
                            ></input>
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              )}
              <p></p>
              <button
                onClick={() => {
                  setShowPopup(false);
                }}
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  if (popupContent) {
                    let addText = "";
                    let price = 0;
                    menu.map((item) => {
                      if (item.type === "Add") {
                        const input = document.getElementById(
                          item.id.toString()
                        ) as HTMLInputElement | null;
                        if (input) {
                          const quantity = parseInt(input.value, 10);
                          if (quantity > 0) {
                            addText += `${quantity} ${item.name},`;
                            let strPrice = item.price
                              .split(" ")[1]
                              .replace(",", ".");
                            let p = parseFloat(strPrice);
                            price += p * quantity;
                          }
                        }
                      }
                    });
                    pushOrder({
                      name: popupContent?.name,
                      description: popupContent?.description,
                      price: popupContent.price,
                      priceAdd: price,
                      type: popupContent?.type,
                      add: addText,
                    });
                    setShowPopup(false);
                  }
                }}
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
