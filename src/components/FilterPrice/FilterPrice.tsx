import React from "react";

import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { sortPriceOn, sortTime } from "../../store/FilterSlice";

import classes from "./FilterPrice.module.scss";

const FilterPrice = () => {
  const { sortPrice } = useAppSelector((state) => state.FilterSlice);

  const dispatch = useAppDispatch();
  const clazz = [classes.button, sortPrice && classes.active].join(" ");
  return (
    <div>
      <button type="button" className={clazz} onClick={() => dispatch(sortPriceOn())}>
        самый дешевый
      </button>
      <button
        type="button"
        className={[classes.button, !sortPrice && classes.active].join(" ")}
        onClick={() => dispatch(sortTime())}
      >
        самый быстрый
      </button>
    </div>
  );
};

export default FilterPrice;
