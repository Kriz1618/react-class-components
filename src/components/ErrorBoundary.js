import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error) {
    console.log("11 error", error.message);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something was wrong</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
