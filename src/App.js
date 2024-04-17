import './App.css';
import {Routes , Route , BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/About Us/AboutUs';
import ContactUs from './Pages/Contact Us/ContactUs';
import Blogs from './Pages/Blogs/Blogs';
import BlogPage from './Pages/BlogPage/BlogPage';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route element={<Home/>} index/>
      <Route element={<AboutUs/>} path='/aboutus'/>
      <Route element={<ContactUs/>} path='/contactus'/>
      <Route element={<Blogs/>} path='/blogs'/>
      <Route element={<BlogPage/>} path='/blogPage'/>
      {/* Update the path for BlogPage to include a parameter for the blog ID */}
      <Route element={<BlogPage />} path='/blog/:id' />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
