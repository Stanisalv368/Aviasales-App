import React from "react";

import classes from "./FilterPrice.module.scss";

const FilterPrice = () => {
  return (
    <div>
      <button className={classes.button}>самый дешевый</button>
      <button className={classes.button}>самый быстрый</button>
      <button className={classes.button}>оптимальный</button>
    </div>
  );
};

export default FilterPrice;
