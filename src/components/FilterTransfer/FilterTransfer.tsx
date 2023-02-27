import React from "react";

import classes from "./FilterTransfer.module.scss";

const FilterTransfer = () => {
  return (
    <div className={classes.container}>
      <span className={classes.title}>количество пересадок</span>
      <div className={classes.container_checkbox}>
        <label>
          <input type="checkbox"></input>
          <span>Все</span>
        </label>
        <label>
          <input type="checkbox"></input>
          <span>Без пересадок</span>
        </label>
        <label>
          <input type="checkbox"></input>
          <span>1 пересадка</span>
        </label>
        <label>
          <input type="checkbox"></input>
          <span>2 пересадки</span>
        </label>
        <label>
          <input type="checkbox"></input>
          <span>3 пересадки</span>
        </label>
      </div>
    </div>
  );
};
export default FilterTransfer;
