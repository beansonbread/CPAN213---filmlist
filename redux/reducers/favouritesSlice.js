import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  getDocs,
  setDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const loadFavourites = createAsyncThunk(
  "favourites/loadFavourites",
  async (_, thunkAPI) => {
    try {
      const snapshot = await getDocs(collection(db, "favourites"));
      return snapshot.docs.map((doc) => doc.data());
    } catch (error) {
      return thunkAPI.rejectWithValue("Could not load favourites.");
    }
  }
);

export const addFavourite = createAsyncThunk(
  "favourites/addFavourite",
  async (movie, thunkAPI) => {
    try {
      await setDoc(doc(db, "favourites", String(movie.id)), movie);
      return movie;
    } catch (error) {
      return thunkAPI.rejectWithValue("Could not add favourite.");
    }
  }
);

export const removeFavourite = createAsyncThunk(
  "favourites/removeFavourite",
  async (movieId, thunkAPI) => {
    try {
      await deleteDoc(doc(db, "favourites", String(movieId)));
      return movieId;
    } catch (error) {
      return thunkAPI.rejectWithValue("Could not remove favourite.");
    }
  }
);

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    favourites: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadFavourites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadFavourites.fulfilled, (state, action) => {
        state.loading = false;
        state.favourites = action.payload;
      })
      .addCase(loadFavourites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addFavourite.fulfilled, (state, action) => {
        const exists = state.favourites.some(
          (item) => item.id === action.payload.id
        );
        if (!exists) {
          state.favourites.push(action.payload);
        }
      })
      .addCase(removeFavourite.fulfilled, (state, action) => {
        state.favourites = state.favourites.filter(
          (item) => item.id !== action.payload
        );
      });
  },
});

export default favouritesSlice.reducer;