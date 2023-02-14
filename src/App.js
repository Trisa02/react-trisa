import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Components/Home";
import Utama from "./Home/Utama";
// import { table } from "./table";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Utama" element={<Utama />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
