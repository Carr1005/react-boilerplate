import { all } from "redux-saga/effects";

import { watchers as canvas } from "./elements/canvas";
import { watchers as homePanel } from "./panels/mainPanel";

const runWatchers = watchers =>
  Object.keys(watchers).map(key => watchers[key]());

export default function* rootSaga() {
  yield all([...runWatchers(canvas), ...runWatchers(homePanel)]);
}
