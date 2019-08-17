import { createStore, applyMiddleware } from "redux";
import rootReducer from "reducers";
import { saga } from "store/middleware";
import rootSaga from "sagas";

const store = createStore(rootReducer, undefined, applyMiddleware(saga));
saga.run(rootSaga);
export { store };
