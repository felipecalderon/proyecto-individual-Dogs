import Nav from './components/navbar/NavBar'
import Home from "./components/pages/home/Home";
import Dogs from "./components/pages/dogs/Dogs";
import DogDetail from './components/pages/dog/DogDetail';
import AddDogBreed from './components/forms/AddDogBreed'
import { Routes, Route, useLocation } from "react-router-dom";
import { getAllDogs, getTemperaments } from './redux/actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const uri = useLocation()
  const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllDogs())
        dispatch(getTemperaments())
    }, [dispatch])
  return (
  <>
  { (uri?.pathname !== '/') ? <Nav /> : '' }
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dogs" element={<Dogs />} />
      <Route path="/dog/:id" element={<DogDetail/>} />
      <Route path="/add" element={<AddDogBreed />} />
    </Routes>
  
  </>
  );
}

export default App;
