import React from "react";
import ErrorBoundary from "../../Hoc/ErrorBoundary";
import { Feed } from "../Feed/Feed";
import Header from "../Header/Header";
import { PRODUCT_LIST } from "../../data/products";

function Layout() {
  const FeedPage = (props) => (
    <ErrorBoundary>
      <Feed {...props} />
    </ErrorBoundary>
  );

  return (
    <React.Fragment>
      <FeedPage products={PRODUCT_LIST} />
    </React.Fragment>
  );
}

export default Layout;
