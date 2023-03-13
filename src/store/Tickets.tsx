import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { InitialState } from "../Types";

const URL = "https://aviasales-test-api.kata.academy";

export const fetchSearchID = createAsyncThunk("tickets/fetchSearchID", async function () {
  const res = await fetch(`${URL}/search`);
  const data = await res.json();
  return data.searchId;
});

export const fetchGetTicket = createAsyncThunk("tickets/fetchGetTicket", async function (value, { rejectWithValue }) {
  const res = await fetch(`${URL}/tickets?searchId=${value}`);

  if (!res.ok) {
    return rejectWithValue("error");
  }
  return await res.json();
});

const initialState: InitialState = {
  tickets: [],
  searchID: "",
  loader: true,
  search: true,
  reloadSearch: true,
};
const TicketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchID.fulfilled, (state, action) => {
        state.searchID = action.payload;
      })
      .addCase(fetchGetTicket.fulfilled, (state, action) => {
        if (!action.payload.stop) {
          state.tickets = [...state.tickets, ...action.payload.tickets];
        } else {
          state.search = false;
          state.loader = false;
        }
      })
      .addMatcher(isError, (state) => {
        state.reloadSearch = !state.reloadSearch;
      });
  },
});

function isError(action: any) {
  return action.type.endsWith("rejected");
}

export default TicketSlice.reducer;
