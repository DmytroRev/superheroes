import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterList from "../CharacterList/CharacterList";
import "./App.css";
import CharacterDetails from "../CharacterDetails/CharacterDetails";
import { Suspense } from "react";
import { Home } from "../Home/Home";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
          
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
          <Route path='/character' element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
