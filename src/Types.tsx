export type InitialState = {
  tickets: Array<TicketsType>;
  searchID: string;
  loader: boolean;
  search: boolean;
  reloadSearch: boolean;
};

export type TicketsType = {
  price: number;
  segments: Array<SegmentsType>;
  carrier: string;
};

export type SegmentsType = {
  date: string;
  destination: string;
  duration: number;
  origin: string;
  stops: Array<string>;
};

export type FilterType = {
  all: boolean;
  nonStop: boolean;
  oneTransfer: boolean;
  twoTransfer: boolean;
  threeTransfer: boolean;
  sortPrice: boolean;
};
