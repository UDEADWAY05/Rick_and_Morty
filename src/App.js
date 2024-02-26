import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom"
import { RouteWithErrorBoundary } from "./components/common/RouteWithErrorBoundary";
import MainPage from "./components/page/main"
import NavBar from './components/ui/NavBar';
import './App.scss';
import EpisodesPage from "./components/page/episodes";
import CharactersPage from "./components/page/characters";
import LocationsPage from "./components/page/locations";
import { AuthProvider } from "./context/AuthProvider";
import { PrivateRoute } from "./components/PrivateRoute";
import { Loader } from "./components/common/loader";

const EpisodePage = lazy(() => import("./components/page/episode"))
const CharacterPage = lazy(() => import("./components/page/character"))
const LocationPage = lazy(() => import("./components/page/location"))
const NotFoundPage = lazy(() => import("./components/page/notFound"))
const Login = lazy(() => import("./components/page/login"))

function App() {
  return (
      <div className="App">
        <AuthProvider>
            <NavBar />
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/episodes">
                        <Route index element={<RouteWithErrorBoundary>
                                <PrivateRoute>
                                    <EpisodesPage />
                                </PrivateRoute>
                            </RouteWithErrorBoundary>
                        } />
                        <Route path=":id" element={<RouteWithErrorBoundary>
                                <PrivateRoute>
                                    <Suspense fallback={<Loader />}>
                                        <EpisodePage />
                                    </Suspense>
                                </PrivateRoute>
                            </RouteWithErrorBoundary>
                        } />
                    </Route>
                    <Route path="/characters" >
                        <Route index element={<RouteWithErrorBoundary>
                                <PrivateRoute>
                                    <CharactersPage />
                                </PrivateRoute>
                            </RouteWithErrorBoundary>
                        } />
                        <Route path=":id" element={<RouteWithErrorBoundary>
                                <PrivateRoute>
                                    <Suspense fallback={<Loader />}>
                                        <CharacterPage />
                                    </Suspense>
                                </PrivateRoute>
                            </RouteWithErrorBoundary>
                        } />
                    </Route>
                    <Route path="/locations">
                        <Route index element={<RouteWithErrorBoundary>
                                <PrivateRoute>
                                    <LocationsPage />
                                </PrivateRoute>
                            </RouteWithErrorBoundary>
                        } />
                        <Route path=":id" element={<RouteWithErrorBoundary>
                                <PrivateRoute>
                                    <Suspense fallback={<Loader />}>
                                        <LocationPage />
                                    </Suspense>
                                </PrivateRoute>
                            </RouteWithErrorBoundary>
                        } />
                    </Route>
                    <Route path="*" element={
                        <Suspense fallback={<Loader />}>
                            <NotFoundPage />
                        </Suspense>
                    } />
                    <Route path="/login" element={
                        <Suspense fallback={<Loader />}>
                            <Login/>
                        </Suspense>
                    } />
                </Routes>
 
        </AuthProvider>
    </div>
  );
}

export default App;
