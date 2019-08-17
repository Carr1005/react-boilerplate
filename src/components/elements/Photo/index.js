import React, { PureComponent } from "react";
import Draggable from "react-draggable";
import styles from "./photo.module.css";

export default class Photo extends PureComponent {
  handleDragStop = (e, ui) => {
    this.props.handleDrag(this.props.itemId, ui.x, ui.y);
  };

  render() {
    const { x, y, imageSrc } = this.props;
    return (
      <Draggable
        bounds="parent"
        position={{ x, y }}
        onStop={this.handleDragStop}
      >
        <div className={styles["box"]}>
          <img alt="" src={imageSrc} />
        </div>
      </Draggable>
    );
  }
}
