import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { createAction } from "redux-actions";

import logo from "assets/carr_production.png";
import emoji from "assets/firework.png";

import { footerHeight, visibleBuffer } from "consts";
import { setItems, setItemPosition } from "reducers/data";
import { getPhotosSelector } from "selectors";
import { getImageStream, getRandomInt } from "sagas/util";

export const HANDLE_DID_MOUNT = `${__filename}/HANDLE_DID_MOUNT`;
export const HANDLE_SHUFFLE = `${__filename}/HANDLE_SHUFFLE`;

export const handleDidMount = createAction(HANDLE_DID_MOUNT);
export const handleShuffle = createAction(HANDLE_SHUFFLE);

export const sagas = {
  *handleDidMount() {
    yield call(sagas.fetchInitialPhotos);
  },
  *fetchInitialPhotos() {
    const logoStream = yield call(getImageStream, logo);
    const emojiStream = yield call(getImageStream, emoji);
    // like collecting data from api request
    yield put(
      setItems({
        x45y111: {
          itemId: "x45y111",
          x: 45,
          y: 111,
          imageSrc: logoStream
        },
        x318y20: {
          itemId: "x318y20",
          x: 318,
          y: 20,
          imageSrc: emojiStream
        }
      })
    );
  },
  *handleShuffle() {
    const photos = yield select(getPhotosSelector);
    yield all(photos.map(({ itemId }) => call(sagas.relocateItem, itemId)));
  },
  *relocateItem(itemId) {
    const x = getRandomInt(0, window.innerWidth - visibleBuffer);
    const y = getRandomInt(
      0,
      window.innerHeight - footerHeight - visibleBuffer
    );
    yield put(setItemPosition({ itemId, x, y }));
  }
};

export const watchers = {
  *handleDidMount() {
    yield takeLatest(HANDLE_DID_MOUNT, sagas.handleDidMount);
  },
  *handleShuffle() {
    yield takeLatest(HANDLE_SHUFFLE, sagas.handleShuffle);
  }
};
