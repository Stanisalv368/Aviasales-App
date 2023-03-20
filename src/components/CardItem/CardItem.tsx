import React from "react";
import { format, parseISO, add } from "date-fns";

import { TicketsType } from "../../Types";

import classes from "./CardItem.module.scss";

const CardItem = (props: TicketsType) => {
  const { price, segments, carrier } = props;

  const getPadTime = (value: number) => {
    const getPadTime = (times: number) => times.toString().padStart(2, "0");
    const hours = getPadTime(Math.floor(value / 60));
    const mitute = getPadTime(Math.floor(value - Number(hours) * 60));

    return `${hours}ч ${mitute}м`;
  };

  const quantityTransfer = (value: number) => {
    if (value === 0) {
      return "Без пересадок";
    }
    const transferText = value === 1 ? "a" : "и";
    return `${value} пересадк${transferText}`;
  };

  const flightInterval = (date: string, minutes: number) => {
    const timehere = `${format(parseISO(date), "HH")}:${format(parseISO(date), "mm")}`;
    const dateBack = add(parseISO(date), {
      minutes: minutes,
    });
    const timeBack = `${format(dateBack, "HH")}:${format(dateBack, "mm")}`;

    return `${timehere} - ${timeBack}`;
  };

  const timeDurationThere = getPadTime(segments[0].duration);
  const timeDurationBack = getPadTime(segments[1].duration);

  const transferText = quantityTransfer(segments[0].stops.length);
  const transferTextBack = quantityTransfer(segments[1].stops.length);

  const intervalFlightThere = flightInterval(segments[0].date, segments[0].duration);
  const intervalFlightReturn = flightInterval(segments[1].date, segments[1].duration);

  return (
    <li className={classes.carditem}>
      <div className={classes.header}>
        <span>{price.toLocaleString("ru")} Р</span>
        <div className={classes.imgbox}>
          <img alt={carrier} src={`https://pics.avs.io/99/36/${carrier}.png`} />
        </div>
      </div>
      <div className={classes.info}>
        <div>
          <span>
            {segments[0].origin} – {segments[0].destination}
          </span>
          <span>{intervalFlightThere}</span>
        </div>
        <div>
          <span>В пути</span>
          <span>{timeDurationThere}</span>
        </div>
        <div>
          <span>{transferText}</span>
          <span>{segments[0].stops.length > 0 && segments[0].stops.join(", ")}</span>
        </div>
        <div>
          <span>
            {segments[1].origin} – {segments[1].destination}
          </span>
          <span>{intervalFlightReturn}</span>
        </div>
        <div>
          <span>В пути</span>
          <span>{timeDurationBack}</span>
        </div>
        <div>
          <span>{transferTextBack}</span>
          <span>{segments[1].stops.length > 0 && segments[1].stops.join(", ")}</span>
        </div>
      </div>
    </li>
  );
};

export default CardItem;
