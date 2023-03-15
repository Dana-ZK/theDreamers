import React from "react";
import { store } from "data/store";
import StoreItem from "./StoreItem";
import classes from "./Store.module.css";
// import Cart from "components/cart/Cart";

const Store = () => {
  return (
    <div className={classes.store_blok}>
      {store.map((item) => {
        let { name, id, description, price, category } = item;
        return (
          <div key={id}>
            <StoreItem
            id={id}
              name={name}
              description={description}
              price={price}
              category={category}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Store;
