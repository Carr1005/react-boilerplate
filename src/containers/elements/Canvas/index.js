import { connect } from "react-redux";
import { compose } from "redux";

import Canvas from "components/elements/Canvas";
import WithLifecycle from "hoc/WithLifeCycle";
import { setItemPosition } from "reducers/data";
import { handleDidMount } from "sagas/elements/canvas";
import { getPhotosSelector } from "selectors";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

const mergeProps = (state, { dispatch }, ownProps) => {
  const { canvasRef } = ownProps;
  return {
    // withLifecycle
    handleDidMount: () => dispatch(handleDidMount()),
    // Canvas component
    canvasRefId: canvasRef,
    items: getPhotosSelector(state),
    // If dragging relates to more business logic, should wrap it as a saga function
    handleDrag: (itemId, x, y) => dispatch(setItemPosition({ itemId, x, y }))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  ),
  WithLifecycle()
)(Canvas);
