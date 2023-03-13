import { configureStore } from "@reduxjs/toolkit";

import TicketSlice from "./Tickets";
import FilterSlice from "./FilterSlice";

const store = configureStore({
  reducer: {
    Tickets: TicketSlice,
    FilterSlice: FilterSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
