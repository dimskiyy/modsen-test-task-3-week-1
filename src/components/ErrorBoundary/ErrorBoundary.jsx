import React, { Component } from "react";
import ErrorMessage from "../ErrorMesage/ErrorMessage";

class ErrorBoundary extends Component {
    state = {
        error: false,
    };

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({
            error: true,
        });
    }

    render() {
        if (this.state.error === true) {
            return <ErrorMessage />;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
