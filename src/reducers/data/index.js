import { createAction, handleActions } from "redux-actions";
import { set, cloneDeep } from "lodash";

export const SET_ITEM = `${__filename}/SET_ITEM`;
export const SET_ITEMS = `${__filename}/SET_ITEMS`;
export const SET_ITEM_POSITION = `${__filename}/SET_ITEM_POSITION`;
export const SET_ITEM_PHOTO = `${__filename}/SET_ITEM_PHOTO`;

export const setItem = createAction(SET_ITEM, value => value);
export const setItems = createAction(SET_ITEMS, value => value);
export const setItemPosition = createAction(SET_ITEM_POSITION, value => value);
export const setItemPhoto = createAction(SET_ITEM_PHOTO, value => value);

export const defaultState = {
  items: {}
};

export const reducer = handleActions(
  {
    [SET_ITEM]: (state, { payload: { itemId, x, y } }) => ({
      ...state,
      items: {
        ...state.items,
        [itemId]: {
          itemId: itemId,
          x: x,
          y: y,
          imageSrc: null
        }
      }
    }),
    [SET_ITEMS]: (state, { payload }) => ({
      ...state,
      items: { ...state.items, ...payload }
    }),
    [SET_ITEM_POSITION]: (state, { payload: { itemId, x, y } }) =>
      set(
        set(cloneDeep(state), `items[${itemId}].x`, x),
        `items[${itemId}].y`,
        y
      ),
    [SET_ITEM_PHOTO]: (state, { payload: { itemId, imageSrc } }) =>
      set(cloneDeep(state), `items[${itemId}].imageSrc`, imageSrc)
  },
  defaultState
);
