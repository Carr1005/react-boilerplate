import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./button.module.css";
import cx from "classnames";

export default class Button extends PureComponent {
  static propTypes = {
    styleType: PropTypes.oneOf(["camera", "add", "shuffle"]),
    type: PropTypes.string,
    children: PropTypes.any,
    handleClick: PropTypes.func
  };

  static defaultProps = {
    styleType: "",
    type: "",
    children: null,
    handleClick: () => console.log("click button")
  };

  render() {
    const { styleType, type, children, handleClick } = this.props;
    const buttonClassName = cx(styles["wrapper"], styles[styleType]);
    return (
      <div className={buttonClassName}>
        {type === "file" ? (
          <label className={styles["children"]}>
            <input type={type} onChange={handleClick} />
            {children}
          </label>
        ) : (
          <div className={styles["children"]} onClick={handleClick}>
            {children}
          </div>
        )}
      </div>
    );
  }
}
