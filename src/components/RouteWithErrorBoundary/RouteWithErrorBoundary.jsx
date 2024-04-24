import React from "react";
import ErrorBoundary from "../../utils/ErrorBoundary"
import { useLocation } from "react-router-dom"

export const RouteWithErrorBoundary = ({ children }) => {
    const location = useLocation()
    return (
        <ErrorBoundary key={location?.pathname}>
            {children}
        </ErrorBoundary>
    );
};