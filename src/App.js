import './App.css';
import {Routes , Route , BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/About Us/AboutUs';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route element={<Home/>} index/>
      <Route element={<AboutUs/>} path='/aboutus'/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
