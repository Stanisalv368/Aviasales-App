import { format, parseISO, add } from "date-fns";

export const getPadTime = (value: number) => {
  const getPadTime = (times: number) => times.toString().padStart(2, "0");
  const hours = getPadTime(Math.floor(value / 60));
  const mitute = getPadTime(Math.floor(value - Number(hours) * 60));

  return `${hours}ч ${mitute}м`;
};

export const quantityTransfer = (value: number) => {
  if (value === 0) {
    return "Без пересадок";
  }
  const transferText = value === 1 ? "a" : "и";
  return `${value} пересадк${transferText}`;
};

export const flightInterval = (date: string, minutes: number) => {
  const timehere = `${format(parseISO(date), "HH")}:${format(parseISO(date), "mm")}`;
  const dateBack = add(parseISO(date), {
    minutes: minutes,
  });
  const timeBack = `${format(dateBack, "HH")}:${format(dateBack, "mm")}`;

  return `${timehere} - ${timeBack}`;
};
