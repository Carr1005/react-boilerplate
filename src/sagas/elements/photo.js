import { put } from "redux-saga/effects";
import { setItem } from "reducers/data";
import { getRandomInt } from "sagas/util";
import { footerHeight, visibleBuffer } from "consts";

export const sagas = {
  *generatePhoto() {
    try {
      const x = getRandomInt(0, window.innerWidth - visibleBuffer);
      const y = getRandomInt(
        0,
        window.innerHeight - footerHeight - visibleBuffer
      );
      const itemId = `x${x}y${y}`;
      yield put(
        setItem({
          itemId,
          x,
          y
        })
      );
      return itemId;
    } catch (e) {
      console.log(e);
    }
  }
};
