import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom"
import { RouteWithErrorBoundary } from "./components/RouteWithErrorBoundary";
import { MainPage } from "./pages/mainPage"
import { NavBar } from './components/NavBar';
import { EpisodesPage } from "./pages/episodesPage";
import { CharactersPage } from "./pages/charactersPage";
import { LocationsPage } from "./pages/locationsPage";
import { AuthProvider } from "./context/AuthProvider";
import { PrivateRoute } from "./components/PrivateRoute";
import { Loader } from "./components/Loader";

const EpisodePage = lazy(() => import("./pages/episodePage"))
const CharacterPage = lazy(() => import("./pages/characterPage"))
const LocationPage = lazy(() => import("./pages/locationPage"))
const NotFoundPage = lazy(() => import("./pages/notFoundPage/notFoundPage"))
const Login = lazy(() => import("./pages/loginPage"))

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
