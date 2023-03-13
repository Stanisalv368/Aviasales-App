import React, { useEffect, useState } from "react";
import { v4 } from "uuid";

import { useAppSelector } from "../../hooks";
import { TicketsType } from "../../Types";
import CardItem from "../CardItem/CardItem";
import classes from "../CardList/CardList.module.scss";

const CardList = () => {
  const [listLenght, setlistLenght] = useState(5);
  const [ticketList, setTicketList] = useState<Array<TicketsType>>([]);

  const { tickets, search } = useAppSelector((state) => state.Tickets);
  const { nonStop, oneTransfer, twoTransfer, threeTransfer, sortPrice } = useAppSelector((state) => state.FilterSlice);

  useEffect(() => {
    const non = tickets.filter((el) => nonStop && el.segments[0].stops.length == 0);
    const one = tickets.filter((el) => oneTransfer && el.segments[0].stops.length == 1);
    const two = tickets.filter((el) => twoTransfer && el.segments[0].stops.length == 2);
    const three = tickets.filter((el) => threeTransfer && el.segments[0].stops.length == 3);

    if (sortPrice) {
      setTicketList([...non, ...one, ...two, ...three].sort((a, b) => a.price - b.price));
    } else {
      setTicketList(
        [...non, ...one, ...two, ...three].sort((a, b) => {
          return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration);
        })
      );
    }
  }, [nonStop, tickets, oneTransfer, twoTransfer, threeTransfer, sortPrice]);

  return (
    <React.Fragment>
      {!ticketList.length && !search && (
        <div className={classes.infoMessage}>Рейсов, подходящих под заданные фильтры, не найдено</div>
      )}
      {ticketList.slice(0, listLenght).map((ticket) => {
        return <CardItem key={v4()} {...ticket} />;
      })}
      {ticketList.length > 0 && (
        <button className={classes.stillTickets} onClick={() => setlistLenght(listLenght + 5)}>
          еще 5 билетов
        </button>
      )}
    </React.Fragment>
  );
};

export default CardList;
