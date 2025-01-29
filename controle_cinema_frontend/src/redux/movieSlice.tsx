import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Seat {
  fileira: string;
  coluna: number;
}

export interface Movie {
  movieName: string;
  description: string;
  categoria: string;
  gender: string[];
  time: number;
  img_url: string;
}

interface Tickets {
  halfPrice: number;
  fullPrice: number;
}

interface FinishPurchase {
  endBuy: boolean;
  tickets: Tickets;
}

interface MovieState {
  seatsMarked: Seat[];
  movieInfo: Movie | null;
  finishPurchase: FinishPurchase | null;
}

const initialState: MovieState = {
  seatsMarked: [],
  movieInfo: null,
  finishPurchase: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addSeats: (state, action: PayloadAction<Seat[]>) => {
      state.seatsMarked = action.payload;
    },
    addMovieInfo: (state, action: PayloadAction<Movie>) => {
      state.movieInfo = action.payload;
    },
    finishPurchase: (state, action: PayloadAction<FinishPurchase>) => {
      if (!state.finishPurchase) {
        state.finishPurchase = {
          endBuy: false,
          tickets: { halfPrice: 0, fullPrice: 0 },
        };
      }
      state.finishPurchase.endBuy = action.payload.endBuy;
      state.finishPurchase.tickets = action.payload.tickets;
    },
  },
});

export const { addSeats, addMovieInfo, finishPurchase } = movieSlice.actions;

export default movieSlice.reducer;
