import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Button from "components/elements/Button";
import styles from "./main-panel.module.css";

export default class HomePanel extends PureComponent {
  static propTypes = {
    canvasComponent: PropTypes.node,
    addButton: PropTypes.shape({ ...Button.propTypes }),
    cameraButton: PropTypes.shape({ ...Button.propTypes }),
    shuffleButton: PropTypes.shape({ ...Button.propTypes })
  };

  static defaultProps = {
    canvasComponent: <div>Canvas</div>,
    addButton: {},
    cameraButton: {},
    shuffleButton: {}
  };

  render() {
    const {
      addButton,
      cameraButton,
      shuffleButton,
      canvasComponent
    } = this.props;

    return (
      <div className={styles["main-panel"]}>
        {canvasComponent}
        <div className={styles["button-wrapper"]}>
          <Button {...addButton} />
        </div>
        <div className={styles["button-wrapper-2"]}>
          <Button {...cameraButton} />
        </div>
        <div className={styles["button-wrapper-3"]}>
          <Button {...shuffleButton} />
        </div>
        <div className={styles["footer-decoration-component"]} />
        <div className={styles["footer-component"]} />
      </div>
    );
  }
}
