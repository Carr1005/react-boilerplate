import { values } from "lodash";
import { createSelector } from "reselect";

export const photosSelector = state => state.data;

export const getPhotosSelector = createSelector(
  photosSelector,
  ({ items = {} }) => values(items)
);

export const getViewportSize = () => {
  return {
    width: `${window.innerWidth}px`,
    height: `${window.innerHeight - 50}px`
  };
};
