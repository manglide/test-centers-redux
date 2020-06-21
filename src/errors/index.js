import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if(this.state.errorInfo) {
      return(
        <>
        <h3>An Error Occurred</h3>
        <h5>{this.props.message}</h5>
        <h5>{this.state.error}</h5>
        <h5>>{this.state.errorInfo}</h5>
        <details>
        {this.state.errorInfo.componentStack}
        </details>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary
