import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import MainPanel from "components/panels/MainPanel";
import Canvas from "containers/elements/Canvas";
import { canvasRef } from "consts";
import WithLifecycle from "hoc/WithLifeCycle";
import {
  handleDidMount,
  handleFileUpload,
  handleSnapShot
} from "sagas/panels/mainPanel";
import { getPhotosSelector } from "selectors";
import { handleShuffle } from "sagas/elements/canvas";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

const mergeProps = (state, { dispatch }, ownProps) => {
  console.log("=== Store ====", state);
  console.log("=== state.data.items ====", ...getPhotosSelector(state));
  return {
    canvasComponent: <Canvas canvasRef={canvasRef} />,
    // withLifecycle
    handleDidMount: () => dispatch(handleDidMount()),
    // Button component
    addButton: {
      styleType: "add",
      type: "file",
      children: <i className="material-icons md-48 md-light">add</i>,
      handleClick: e => dispatch(handleFileUpload(e))
    },
    cameraButton: {
      styleType: "camera",
      type: "",
      children: <i className="material-icons md-36 md-dark"> camera</i>,
      handleClick: () => dispatch(handleSnapShot())
    },
    shuffleButton: {
      styleType: "shuffle",
      type: "",
      children: <i className="material-icons md-36 md-dark"> shuffle</i>,
      handleClick: () => dispatch(handleShuffle())
    }
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  ),
  WithLifecycle()
)(MainPanel);
