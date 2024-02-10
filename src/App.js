import { Routes, Route } from "react-router-dom"
import MainPage from "./components/page/main"
import NavBar from './components/NavBar';
import './App.css';
import EpisodesPage from "./components/page/episodes";
import CharactersPage from "./components/page/characters";
import LocationsPage from "./components/page/locations";
import CharacterPage from "./components/page/character";
import NotFoundPage from "./components/page/notFound";
import LocationPage from "./components/page/location";
import EpisodePage from "./components/page/episode";

function App() {
  return (
      <div className="App">
        <NavBar />
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/episodes">
                <Route index element={<EpisodesPage />} />
                <Route path=":id" element={<EpisodePage />} />
            </Route>
            <Route path="/characters" >
                <Route index element={<CharactersPage />} />
                <Route path=":id" element={<CharacterPage />} />
            </Route>
            
            <Route path="/locations">
                <Route index element={<LocationsPage />} />
                <Route path=":id" element={<LocationPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    </div>
  );
}

export default App;
