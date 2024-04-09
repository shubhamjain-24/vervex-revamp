import './App.css';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Marquee1 from './components/Marquee/Marquee1';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Testemonials from './components/Testemonials/Testemonials';

function App() {
  return (
    <>
    <Intro/>
    <Services/>
    <Projects/>
    <Marquee1/>
    <Contact/>
    <Testemonials/>
    <Blogs/>
    <Footer/>
    </>
  );
}

export default App;
