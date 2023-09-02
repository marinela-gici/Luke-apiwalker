import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar";
import People from "./Components/People";
import Planets from "./Components/Planets";
import Starships from "./Components/Starships";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SearchBar existingId={""} optionType={""} />}></Route>
          <Route path="/people/:id" element={<People />}></Route>
          <Route path="/planets/:id" element={<Planets />}></Route>
          <Route path="/starships/:id" element={<Starships />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
