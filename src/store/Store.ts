import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import RootReducer from "./RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const Store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const Persistore = persistStore(Store);

export type RootStore = ReturnType<typeof RootReducer>;

export type AppDispatch = typeof Store.dispatch

export default Store;
