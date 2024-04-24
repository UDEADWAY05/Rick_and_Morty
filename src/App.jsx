import React, { Suspense } from "react";
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
import { EpisodePage } from "./pages/episodePage"
import { CharacterPage } from "./pages/characterPage";
import { LocationPage } from "./pages/locationPage";
import { NotFoundPage } from "./pages/notFoundPage";
import { LoginPage } from "./pages/loginPage";
import "../404.html"

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
                            <LoginPage/>
                        </Suspense>
                    } />
                </Routes>
 
        </AuthProvider>
    </div>
  );
}

export default App;
