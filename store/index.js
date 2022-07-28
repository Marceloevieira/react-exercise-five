import { createStore } from "redux";
import { reducers } from "./reducers";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => {

	//Create store
	const store = createStore(reducers);

	//Return store
	return store;
}


//export an assembled wrapper
export const storeWrapper = createWrapper(makeStore, { debug: false });