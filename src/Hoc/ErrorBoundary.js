import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isError: false,
    };
  }

  componentDidCatch() {
    this.setState({ isError: true });
  }

  render() {
    return this.state.isError ? "Something Went Wrong" : this.props.children;
  }
}

export default ErrorBoundary;
