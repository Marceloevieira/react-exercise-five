import { createStore } from "redux";
import { reducers } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => {

	//Create store
	const store = createStore(reducers, composeWithDevTools());

	//Return store
	return store;
}


//export an assembled wrapper
export const storeWrapper = createWrapper(makeStore, { debug: false });