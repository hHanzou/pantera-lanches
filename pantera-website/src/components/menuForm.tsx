import { MenuItem } from "../data/menu";
import { order } from "../App";
import { useEffect } from "react";
import plus from "../assets/plus.svg";

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
  setPopupContent,
  setShowPopup,
}) => {
  let burguer = false;
  let dog = false;
  let drink = false;
  let fries = false;
  let combo = false;

  useEffect(() => {}, [orders]);

  return (
    <form>
      {menu.map((item) => (
        <div key={item.id}>
          {item.type === "Burguer" && !burguer && (
            <>
              <h1 className="subtype">X-Burguers</h1>
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
              <div className="plus-name">
                <span>
                  <img src={plus} alt="plus" className="plus-menu" />
                </span>
                <span className="item-name">{item.name + " "}</span>
              </div>
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
