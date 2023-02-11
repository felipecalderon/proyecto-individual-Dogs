import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Nav from './components/navbar/NavBar'
function App() {
  return (
  <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
      
  </>
  );
}

export default App;
