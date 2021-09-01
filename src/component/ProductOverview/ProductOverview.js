import React from "react";
import classes from "./ProductOverview.module.css";
import * as actionsTypes from "../../actions/actionTypes";
import * as actions from "../../actions";
function ProductsOverview({ product, dispatch }) {
  console.log(product, "props for ", dispatch);
  return (
    <div className={classes.ProductOverview}>
      <div className={classes.banner}>
        <img src={product.image} />
      </div>
      <div className={classes.info}>
        <h1 className={classes.title}>{product.title}</h1>
        <div className={classes.price}>
          <span>Rs.&nbsp;{product.price}</span>
        </div>
        <div className={classes.category}>
          <span>Category&nbsp;:&nbsp;{product.category}</span>
        </div>
        <div>
          <p
            className={`${classes.button} ${classes.addCart} `}
            onClick={() =>
              dispatch(
                actions.InitiateAddToCart(
                  actionsTypes.INITIATE_ADD_CART,
                  product
                )
              )
            }
          >
            Add To Cart
          </p>
          <p className={`${classes.button} ${classes.buyNow} `}>Buy Now</p>
        </div>
        <div className={classes.description}>
          <p>Product Description</p>
          <span>{product.description}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductsOverview;
