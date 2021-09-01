import React from "react";
import Product from "../../component/Feed/Product";
import classes from "./Feed.module.css";

export const Feed = ({ products }) => {
  console.log("prodcuts", products);
  return (
    <React.Fragment>
      <div className={classes.Feed}>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </React.Fragment>
  );
};
