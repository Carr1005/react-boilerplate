import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Photo from "components/elements/Photo";
import styles from "./canvas.module.css";

export default class Canvas extends PureComponent {
  static propTypes = {
    canvasRefId: PropTypes.string,
    items: PropTypes.array,
    handleDrag: PropTypes.func
  };

  static defaultProps = {
    canvasRefId: "",
    items: [],
    handleDrag: () => console.log("drag")
  };

  render() {
    const { canvasRefId, items, handleDrag } = this.props;
    return (
      <div className={styles["canvas"]} id={canvasRefId}>
        {items.map((props, i) => (
          <Photo handleDrag={handleDrag} key={props.itemId} {...props} />
        ))}
      </div>
    );
  }
}
