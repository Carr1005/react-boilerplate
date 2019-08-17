import React, { PureComponent } from "react";
import PropTypes from "prop-types";

const getComponentName = component =>
  component.displayName || component.name || "Component";

export default ({
  handleWillMount,
  handleDidMount,
  handleWillUnmount
} = {}) => WrappedComponent => {
  class WithLifecycle extends PureComponent {
    static propTypes = {
      handleWillMount: PropTypes.func,
      handleDidMount: PropTypes.func,
      handleWillUnmount: PropTypes.func
    };
    static defaultProps = {
      handleWillMount:
        handleWillMount ||
        (() => console.log(`${getComponentName(WrappedComponent)} will mount`)),
      handleDidMount:
        handleDidMount ||
        (() =>
          console.log(`${getComponentName(WrappedComponent)} did mounted`)),
      handleWillUnmount:
        handleWillUnmount ||
        (() =>
          console.log(`${getComponentName(WrappedComponent)} will unmount`))
    };
    componentWillMount = this.props.handleWillMount;
    componentDidMount = this.props.handleDidMount;
    componentWillUnmount = this.props.handleWillUnmount;
    render() {
      const {
        handleWillMount,
        handleDidMount,
        handleWillUnmount,
        ...props
      } = this.props;
      return <WrappedComponent {...props} />;
    }
  }
  WithLifecycle.displayName = `WithLifecycle(${getComponentName(
    WrappedComponent
  )})`;
  return WithLifecycle;
};
