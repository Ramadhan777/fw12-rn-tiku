import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from './reducers'
import { persistStore } from "redux-persist";

const store = configureStore({
    reducer,
    middleware: [thunk, logger]
})

const persistor = persistStore(store)

export {store, persistor}