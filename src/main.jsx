import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

/* ===============================
   Minimal Error Boundary
=============================== */

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 text-center px-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Something went wrong.
            </h1>
            <p className="mt-3 text-gray-600">
              Please refresh the page.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/* ===============================
   Render Application
=============================== */

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
