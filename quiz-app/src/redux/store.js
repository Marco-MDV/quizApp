import { configureStore } from "@reduxjs/toolkit";
import currentLocationReducer from "./sliceLinksNavbar";

export const store = configureStore({
    reducer: {
        currentLocation: currentLocationReducer,
    },
});