import { MenuItem } from "../data/menu";
import { order } from "../App";
import { useEffect } from "react";

type MenuFormProps = {
  menu: MenuItem[];
  orders: [] | order[];
  setOrders: React.Dispatch<React.SetStateAction<[] | order[]>>;
  setPopupContent: React.Dispatch<React.SetStateAction<order | null>>;
  setShowPopup: (value: React.SetStateAction<boolean>) => void;
};

export const MenuForm: React.FC<MenuFormProps> = ({
  menu,
  orders,
  setOrders,
  setPopupContent,
  setShowPopup,
}) => {
  let burguer = false;
  let dog = false;
  let drink = false;
  let fries = false;
  let combo = false;

  function pushOrder(newOrder: order) {
    const existingOrder = orders.find((order) => order.name === newOrder.name);
    if (existingOrder) {
      const newArr: order[] = orders.filter(
        (item) => item.name !== newOrder.name
      );
      setOrders(newArr);
    } else {
      setOrders([...orders, newOrder]);
    }
  }

  const inputValue = (id: string) => {
    const input = document.getElementById(id) as HTMLInputElement | null;
    if (input) {
      return parseInt(input.value, 10);
    }
    return NaN;
  };

  const isItemOrdered = (itemName: string) => {
    return orders.some((order) => order.name === itemName);
  };

  // const updateQuantity = (num: number, itemName: string, itemTupe: string) => {
  //   const newArr: order[] = orders.filter((item) => item.name !== itemName);

  //   const newOrder: order = {
  //     name: itemName,
  //     description>
  //     type: itemTupe,
  //   };
  //   setOrders([...newArr, newOrder]);
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // orders.forEach((order) => {
    //   if (order.type === "Burguer" || order.type === "Dog") {
    //     for (let i = 0; i < order.quantity; i++) {
    //       const newOrder: order = {
    //         id: i + 1,
    //         name: order.name,
    //         quantity: 1,
    //         type: order.type,
    //       };
    //       setOrdersWithAdds([...ordersWithAdds, newOrder]);
    //       ordersWithAdds[0].name = "zé";
    //       console.log(ordersWithAdds);
    //     }
    //   }
    // });
    if (orders[0]) {
      orders[0].name = "zé";
      console.log(orders[0]);
    }
    // let text = "";
    // orders.forEach((order) => {
    //   text += `${order.quantity} - ${order.name} \n`;
    // });
    // const url_text = encodeURIComponent(text);
    // console.log(
    //   `https://api.whatsapp.com/send?phone=554197804023&text=${url_text}`
    // );
  };

  useEffect(() => {
    console.log(orders);
  }, [orders]);

  return (
    <form onSubmit={handleSubmit}>
      {menu.map((item) => (
        <div key={item.id}>
          {item.type === "Burguer" && !burguer && (
            <>
              <h1 className="subtype">X-Burguers</h1>
              {console.log("Aqui")}
              {(burguer = true)}
            </>
          )}
          {item.type === "Dog" && !dog && (
            <>
              <h1 className="subtype">Dogs</h1>
              {(dog = true)}
            </>
          )}
          {item.type === "Combo" && !combo && (
            <>
              <h1 className="subtype">Combos</h1>
              {(combo = true)}
            </>
          )}
          {item.type === "Fries" && !fries && (
            <>
              <h1 className="subtype">Fritas</h1>
              {(fries = true)}
            </>
          )}
          {item.type === "Drink" && !drink && (
            <>
              <h1 className="subtype">Drinks</h1>
              {(drink = true)}
            </>
          )}
          {item.type !== "Add" && (
            <div
              key={item.id}
              className="item-div"
              onClick={() => {
                setPopupContent(item);
                setShowPopup(true);
              }}
            >
              <span className="item-name">{item.name + " "}</span>
              <span className="item-price"> {item.price}</span>
              {/* <input
                  type="checkbox"
                  readOnly={true}
                  checked={isItemOrdered(item.name)}
                  name={item.name}
                  id={item.id + "cb"}
                /> */}
            </div>
          )}
        </div>
      ))}
    </form>
  );
};
