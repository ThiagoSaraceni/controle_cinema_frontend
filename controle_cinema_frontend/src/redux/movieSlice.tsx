import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Seat {
  fileira: string;
  coluna: number;
}

interface MovieState {
  seatsMarked: Seat[];
}

const initialState: MovieState = {
  seatsMarked: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addSeats: (state, action: PayloadAction<Seat[]>) => {
      state.seatsMarked = action.payload; // Acessando corretamente o payload
    },
  },
});

export const { addSeats } = movieSlice.actions;

export default movieSlice.reducer;
