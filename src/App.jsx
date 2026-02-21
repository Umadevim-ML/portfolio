import { BrowserRouter } from "react-router-dom";

import { About, Contact, Certifications, Achievements, Navbar, Projects, Education } from "./components";
import Skills from "./components/Skills";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
        <About />
        <Skills />
        <Education />
        <Projects />
        <Achievements />
        <Certifications />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;

