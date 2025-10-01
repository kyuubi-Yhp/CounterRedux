// шаг 2 
// создаем store прокидываемв него наши правила из reducer

import { createStore } from "redux";
import { counterReducer } from "./reducer";

export const store = createStore(counterReducer,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())