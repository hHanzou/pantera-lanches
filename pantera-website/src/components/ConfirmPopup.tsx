import "./ConfirmPopup.css";
import { order } from "../App";

type PopupType2 = {
  showPopup2: boolean;
  setShowPopup2: React.Dispatch<React.SetStateAction<boolean>>;
  orders: [] | order[];
};

type OrderWithCount = order & {
  count: number;
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

  const contarPedidos = (pedidos: order[]) => {
    const contador = pedidos.reduce<{
      [key: string]: { pedido: order; count: number };
    }>((acc, pedido) => {
      const key = `${pedido.name}-${pedido.add ?? ""}`; // Cria uma chave única considerando name e add
      if (!acc[key]) {
        acc[key] = { pedido, count: 0 };
      }
      acc[key].count += 1;
      return acc;
    }, {});

    return Object.values(contador).map((item) => ({
      ...item.pedido,
      count: item.count,
    }));
  };

  const formatToMessage = (list: OrderWithCount[]) => {
    // e.add ? text += `(${e.add})\r\n` : null;
    if (orders.length > 0) {
      let text = "Olá, eu gostaria de fazer um pedido. \r\n";
      list.map((e) => {
        let adds: string = "";
        if (e.add) {
          adds = e.add.slice(0, -1);
          // adds = e.add.split("").pop().toString();
        }
        text += `${e.count}x - ${e.name}${e.add ? ` - (${adds})` : ""}\r\n`;
      });

      const url_text = encodeURIComponent(text);
      const whats = `https://api.whatsapp.com/send?phone=554791728556&text=${url_text}`;
      window.location.href = whats;
    } else {
      alert("Coloque itens ao seu carrinho!");
    }
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
              <button
                onClick={() => {
                  const pedidosComContagem = contarPedidos(orders);
                  formatToMessage(pedidosComContagem);
                }}
              >
                Confirmar
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
