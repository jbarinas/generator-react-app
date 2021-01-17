import React from "react";

interface Props {
  children: React.ReactElement;
}

interface State {
  hasError: boolean;
  error: object | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: object | null): State {
    return {hasError: true, error};
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please reload the page</h1>;
    }

    return this.props.children;
  }
}
