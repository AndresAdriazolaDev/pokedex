import "./App.css";
import { TopBar } from "./components/TopBar";
import { BottomBar } from "./components/BottomBar";
import { PokeList } from "./components/Pokelist";

function App() {
  return (
    <div>
      <TopBar />
      <PokeList />
      <BottomBar />
    </div>
  );
}

export default App;
