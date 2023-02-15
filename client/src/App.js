import Nav from './components/navbar/NavBar'
import Home from "./components/pages/home/Home";
import Dogs from "./components/pages/dogs/Dogs";
import DogDetail from './components/pages/dog/DogDetail';
import CreateBreed from './components/forms/CreateBreed'

import { Routes, Route } from "react-router-dom";
import { getAllDogs } from './redux/actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllDogs())
    }, [dispatch])

  return (
  <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dogs" element={<Dogs />} />
      <Route path="/dog/:id" element={<DogDetail/>} />
      <Route path="/add" element={<CreateBreed />} />
    </Routes>
      
  </>
  );
}

export default App;
