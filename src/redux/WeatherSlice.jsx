import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for fetching weather data
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=64.1355&longitude=-21.8954&current=temperature_2m,weathercode,windspeed_10m"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      return data.current; // Return the current weather data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create Redux slice
const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.weatherData = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;
