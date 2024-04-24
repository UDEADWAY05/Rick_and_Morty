import { Component, Suspense, lazy } from "react";
import { Loader } from "../components/Loader";

const ErrorPage = lazy(() => import("../pages/errorPage"))

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError() {
        return {
            hasError: true,
        }
    }
    
    render() {
        if (this.state.hasError) {
            return <Suspense fallback={<Loader/>}>
                <ErrorPage />
            </Suspense>
        }

        return this.props.children
    }
}

export default ErrorBoundary;