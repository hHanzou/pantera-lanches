import "./Popup.css";
import { order } from "../App";
import { menu } from "../data/menu";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";

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

  function addOne(id: string) {
    const e = document.getElementById(id) as HTMLInputElement;
    if (e) {
      const actualValue = e.value;
      const valueInNumber = parseInt(actualValue);
      const newValue = valueInNumber + 1;
      e.value = newValue.toString();
    }
  }

  function removeOne(id: string) {
    const e = document.getElementById(id) as HTMLInputElement;
    if (e) {
      const actualValue = e.value;
      const valueInNumber = parseInt(actualValue);
      if (id == "quantity") {
        if (valueInNumber > 1) {
          const newValue = valueInNumber - 1;
          e.value = newValue.toString();
        }
      } else {
        if (valueInNumber > 0) {
          const newValue = valueInNumber - 1;
          e.value = newValue.toString();
        }
      }
    }
  }

  if (showPopup) {
    return (
      <div className="modal-background">
        <div className="modal-style">
          <div className="modal-container">
            {popupContent != null && (
              <div className="popup-intern-container">
                <h1 className="popup-title">{popupContent.name}</h1>
                <p>{popupContent.description}</p>
                <div className="item-container">
                  {menu.map((item) => (
                    <div key={item.id}>
                      {item.type === "Add" &&
                        (popupContent.type === "Burguer" ||
                          popupContent.type === "Dog") && (
                          <div className="add-row">
                            <div className="name-and-price">
                              <span>{item.name}</span>
                              <span>-</span>
                              <span>{item.price}</span>
                            </div>
                            <div className="add-span">
                              <img
                                src={minus}
                                onClick={() => {
                                  removeOne(item.id.toString());
                                }}
                                className="addMinus"
                                alt=""
                              />
                              <img
                                src={plus}
                                onClick={() => {
                                  addOne(item.id.toString());
                                }}
                                className="addplus"
                                alt=""
                              />
                              <input
                                type="number"
                                name={item.name}
                                id={item.id.toString()}
                                defaultValue={0}
                                min={0}
                                max={20}
                              ></input>
                            </div>
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="quantityRow">
              <div>Quantidade:</div>
              <div className="add-span">
                <img
                  src={minus}
                  onClick={() => {
                    removeOne("quantity");
                  }}
                  className="addMinus"
                  alt=""
                />
                <img
                  src={plus}
                  onClick={() => {
                    addOne("quantity");
                  }}
                  className="addplus"
                  alt=""
                />
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  defaultValue={1}
                  min={1}
                  max={20}
                ></input>
              </div>
            </div>
            <div className="popup-button-div">
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
                    let quant = document.getElementById(
                      "quantity"
                    ) as HTMLInputElement;
                    if (quant) {
                      const quantity = parseInt(quant.value);
                      for (let i = 0; i < quantity; i++) {
                        setOrders((prevOrders) => [
                          ...prevOrders,
                          {
                            name: popupContent?.name,
                            description: popupContent?.description,
                            price: popupContent.price,
                            priceAdd: price,
                            type: popupContent?.type,
                            add: addText,
                          },
                        ]);
                      }
                    }

                    setShowPopup(false);
                    console.log(orders);
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
