import Detail from "./components/Detail";
import Home from "./components/Home";
import Landing from "./views/Landing";
import Error404 from "./views/404";
import CreatePokemon from "./components/CreatePokemon";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/home/:pageNumber" element={<Home />}></Route>
      <Route path="/home/:pageNumber/:filterType" element={<Home />}></Route>
      <Route path="/pokemon/:name" element={<Detail />}></Route>
      <Route path="/createPokemon" element={<CreatePokemon />}></Route>
      <Route path="*" element={<Error404 />}></Route>
    </Routes>
  );
}

export default App;
