import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "../../hooks";
import FilterTransfer from "../FilterTransfer/FilterTransfer";
import FilterPrice from "../FilterPrice/FilterPrice";
import CardList from "../CardList/CardList";
import { fetchSearchID, fetchGetTicket } from "../../store/Tickets";

import classes from "./App.module.scss";

const App = () => {
  const { searchID, search, tickets, reloadSearch } = useAppSelector((state) => state.Tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchID());
  }, []);

  useEffect(() => {
    if (searchID !== "") {
      if (search) dispatch(fetchGetTicket(searchID));
    }
  }, [searchID, search, tickets, reloadSearch]);

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
