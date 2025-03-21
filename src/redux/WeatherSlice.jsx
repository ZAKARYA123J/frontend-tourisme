import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
export const fetchWeather = createAsyncThunk(
    "weather/fetchWeather",
    async () =>{
        const response = await fetch (
             "https://api.open-meteo.com/v1/forecast?latitude=30.4278&longitude=-9.5981&current_weather=true"
        );
        if(!response.ok){
            throw new Error("failed to fetch weather data");
        }
        return await response.json();
    }
);
const weatherSlice = createSlice({
    name:"weather",
    initialState:{
        weatherData:null,
        status:"idle",
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchWeather.pending,(state)=>{state.status="loading";})
        .addCase(fetchWeather.fulfilled,(state,action)=>{
            state.status="succeeded";
            state.weatherData=action.payload.current_weather;
        })
        .addCase(fetchWeather.rejected,(state,action)=>{
            state.status="failed";
            state.error=action.error.message;
        });
    },
});
export default weatherSlice.reducer;