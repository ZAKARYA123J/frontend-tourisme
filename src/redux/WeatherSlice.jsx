import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Création de l'action asynchrone pour récupérer la météo
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async () => {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=30.42&longitude=-9.60&current_weather=true");
    const data = await response.json();
    return data.current_weather; // On récupère seulement les données nécessaires
  }
);

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
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
