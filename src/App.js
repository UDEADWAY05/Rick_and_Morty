import { Routes, Route } from "react-router-dom"
import MainPage from "./components/page/main"
import NavBar from './components/ui/NavBar';
import './App.css';
import EpisodesPage from "./components/page/episodes";
import CharactersPage from "./components/page/characters";
import LocationsPage from "./components/page/locations";
import CharacterPage from "./components/page/character";
import NotFoundPage from "./components/page/notFound";
import LocationPage from "./components/page/location";
import EpisodePage from "./components/page/episode";
import { AuthProvider } from "./context/AuthProvider";
import Login from "./components/page/login";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
      <div className="App">
        <AuthProvider>
            <NavBar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/episodes">
                    <Route index element={<PrivateRoute><EpisodesPage /></PrivateRoute>} />
                    <Route path=":id" element={<PrivateRoute><EpisodePage /></PrivateRoute>} />
                </Route>
                <Route path="/characters" >
                    <Route index element={<PrivateRoute><CharactersPage /></PrivateRoute>} />
                    <Route path=":id" element={<PrivateRoute><CharacterPage /></PrivateRoute>} />
                </Route>
                
                <Route path="/locations">
                    <Route index element={<PrivateRoute><LocationsPage /></PrivateRoute>} />
                    <Route path=":id" element={<PrivateRoute><LocationPage /></PrivateRoute>} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/login" element={< Login/>} />
              </Routes>
        </AuthProvider>
    </div>
  );
}

export default App;
