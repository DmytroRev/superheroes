import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterList from "../CharacterList/CharacterList";
import "./App.css";
import CharacterDetails from "../CharacterDetails/CharacterDetails";
import { Suspense } from "react";

function App() {
  return (
    <>
    <header><h1>Superhero Marvel and DC</h1></header>
      <Suspense fallback={<div>Loading...</div>}>
          
        <Router>
          <Routes>
            <Route path='/' element={<CharacterList />} />
            <Route path="/character/:id" element={<CharacterDetails />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
