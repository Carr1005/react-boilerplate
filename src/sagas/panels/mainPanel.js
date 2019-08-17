import { takeLatest, put, call } from "redux-saga/effects";
import { createAction } from "redux-actions";
import { setItemPhoto } from "reducers/data";
import html2canvas from "html2canvas";
import { canvasRef } from "consts";

import { sagas as photoSaga } from "sagas/elements/photo";
import { getDownloadImage } from "sagas/util";

export const HANDLE_DID_MOUNT = `${__filename}/HANDLE_DID_MOUNT`;
export const HANDLE_FILE_UPLOAD = `${__filename}/HANDLE_FILE_UPLOAD`;
export const HANDLE_SNAP_SHOT = `${__filename}/HANDLE_SNAP_SHOT`;

export const handleDidMount = createAction(HANDLE_DID_MOUNT);
export const handleFileUpload = createAction(HANDLE_FILE_UPLOAD, event => ({
  event
}));
export const handleSnapShot = createAction(HANDLE_SNAP_SHOT);

export const sagas = {
  *handleDidMount() {
    console.log("homePanel did mount");
  },

  *handleFileUpload({ payload: { event } }) {
    const newItemId = yield call(photoSaga.generatePhoto);
    if (newItemId) {
      yield put(
        setItemPhoto({
          itemId: newItemId,
          imageSrc: URL.createObjectURL(event.target.files[0])
        })
      );
    }
  },
  *handleSnapShot() {
    try {
      const canvas = yield call([window.document, "getElementById"], canvasRef);
      const canvasObj = yield call(html2canvas, canvas);
      const imgData = canvasObj.toDataURL("image/png");
      yield call(getDownloadImage, imgData);
    } catch (e) {
      console.log(e);
    }
  }
};

export const watchers = {
  *handleDidMount() {
    yield takeLatest(HANDLE_DID_MOUNT, sagas.handleDidMount);
  },
  *handleFileUpload() {
    yield takeLatest(HANDLE_FILE_UPLOAD, sagas.handleFileUpload);
  },
  *handleSnapShot() {
    yield takeLatest(HANDLE_SNAP_SHOT, sagas.handleSnapShot);
  }
};
