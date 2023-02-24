import { cardsReducer } from "./reducer/cardsReducer";
import { createStore } from "redux";




export const store = createStore(cardsReducer);