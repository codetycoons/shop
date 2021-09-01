import Layout from "../Layout/Layout";
import classes from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductOverview from "../ProductOverview/ProductOverview";
import Header from "../Header/Header";
function App() {
  return (
    <div className={classes.App}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Layout} />
          <Route path="/shop/:id" exact component={ProductOverview} />
          <Route render={() => <h1>Page Not Found...</h1>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
