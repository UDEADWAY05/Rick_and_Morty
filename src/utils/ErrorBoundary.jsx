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

    static getDerivedStateFromError(error) {
        console.log("#### ERROR", error)
        return {
            hasError: true,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log("### error", error)
        console.log("#### errorInfo", errorInfo )
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