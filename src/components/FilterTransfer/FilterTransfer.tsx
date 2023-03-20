import React from "react";
import { Spin } from "antd";

import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { checkAll, checkNon, checkOne, checkThree, checkTwo } from "../../store/FilterSlice";

import classes from "./FilterTransfer.module.scss";

const FilterTransfer = () => {
  const { all, nonStop, oneTransfer, twoTransfer, threeTransfer } = useAppSelector((state) => state.FilterSlice);
  const { loader } = useAppSelector((state) => state.Tickets);
  const dispatch = useAppDispatch();

  return (
    <div className={classes.container}>
      {loader && <Spin className={classes.spin} />}
      <span className={classes.title}>количество пересадок</span>
      <div className={classes.container_checkbox}>
        <label>
          <input type="checkbox" checked={all} onChange={() => dispatch(checkAll())}></input>
          <span>Все</span>
        </label>
        <label>
          <input type="checkbox" checked={nonStop} onChange={() => dispatch(checkNon())}></input>
          <span>Без пересадок</span>
        </label>
        <label>
          <input type="checkbox" checked={oneTransfer} onChange={() => dispatch(checkOne())}></input>
          <span>1 пересадка</span>
        </label>
        <label>
          <input type="checkbox" checked={twoTransfer} onChange={() => dispatch(checkTwo())}></input>
          <span>2 пересадки</span>
        </label>
        <label>
          <input type="checkbox" checked={threeTransfer} onChange={() => dispatch(checkThree())}></input>
          <span>3 пересадки</span>
        </label>
      </div>
    </div>
  );
};
export default FilterTransfer;
