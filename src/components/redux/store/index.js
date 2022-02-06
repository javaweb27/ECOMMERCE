import { createStore } from "redux";
import reducer from "../reducers";

const store = createStore(reducer)

store.subscribe(() => null)

export default store
