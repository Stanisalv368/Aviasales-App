import React from "react";

import FilterTransfer from "../FilterTransfer/FilterTransfer";
import FilterPrice from "../FilterPrice/FilterPrice";
import CardList from "../CardList/CardList";

import classes from "./App.module.scss";

const App = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logoBox}></div>
      <div className={classes.main}>
        <FilterTransfer />
        <div className={classes.cardlist}>
          <FilterPrice />
          <CardList />
        </div>
      </div>
    </div>
  );
};

export default App;
