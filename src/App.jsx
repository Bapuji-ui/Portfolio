import Home from './assets/components/Home';
import About from './assets/components/About';
import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';
import Projects from './assets/components/Projects';
import Contact from './assets/components/Contact';

export const App = () => {
  return (
    <div>
      {/* Arrange all this in arranged order */}
        <Navbar/>
        <Home/>
        <About/> 
        <Projects/>
        <Contact/>
        <Footer/>
        

    </div>
  )
}
export default App;
