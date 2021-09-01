import React from "react";
import ProductsOverview from "../../component/ProductOverview/ProductOverview";
import { connect } from "react-redux";
function ProductOverview(props) {
  const product = props.location.state;
  console.log(product);
  return <ProductsOverview product={product} dispatch={props.dispatch} />;
}

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapDispatchToProps)(ProductOverview);
