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

interface MovieState {
  seatsMarked: Seat[];
  movieInfo: Movie | null;
}

const initialState: MovieState = {
  seatsMarked: [],
  movieInfo: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addSeats: (state, action: PayloadAction<Seat[]>) => {
      state.seatsMarked = action.payload; // Acessando corretamente o payload
    },
    addMovieInfo: (state, action: PayloadAction<Movie>) => {
      state.movieInfo = action.payload;
    },
  },
});

export const { addSeats, addMovieInfo } = movieSlice.actions;

export default movieSlice.reducer;
