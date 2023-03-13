import React from "react";

import { getPadTime, quantityTransfer, flightInterval } from "../../helpers";
import { TicketsType } from "../../Types";

import classes from "./CardItem.module.scss";

const CardItem = (props: TicketsType) => {
  const { price, segments, carrier } = props;

  const timeDurationThere = getPadTime(segments[0].duration);
  const timeDurationBack = getPadTime(segments[1].duration);

  const transferText = quantityTransfer(segments[0].stops.length);
  const transferTextBack = quantityTransfer(segments[1].stops.length);

  const intervalFlightThere = flightInterval(segments[0].date, segments[0].duration);
  const intervalFlightReturn = flightInterval(segments[1].date, segments[1].duration);

  return (
    <div className={classes.carditem}>
      <div className={classes.header}>
        <span>{price.toLocaleString("ru")} Р</span>
        <div className={classes.imgbox}>
          <img alt="poster" src={`https://pics.avs.io/99/36/${carrier}.png`} />
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
    </div>
  );
};

export default CardItem;
