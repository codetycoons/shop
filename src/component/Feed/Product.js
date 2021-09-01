import React from "react";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
function Product(props) {
  return (
    <Link
      to={{
        pathname: `/shop/${props.title.split(" ").join("-")}`,
        state: props,
      }}
    >
      <div className={classes.Product}>
        <img src={props.image} />
        <div className={classes.info}>
          <p className={classes.title}>{props.title}</p>
          <p className={classes.price}>Rs.&nbsp;{props.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default Product;
