import React, { Component } from 'react';

import ErrorView from '../ErrorView/ErrorView';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorView />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
