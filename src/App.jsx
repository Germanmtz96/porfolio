

import './App.css'
import Intro from './PartesPages/Intro';
import ExpLaboral from './PartesPages/ExpLaboral';
import Proyectos from './PartesPages/Proyectos';


function App() {


  return (
    <>
    <ul>
      <li>Experiencia</li>
      <li>Proyectos</li>
      <li>Sobre mí</li>
      <li>Contacto</li>

    </ul>

      <Intro/>
      <ExpLaboral/>
      <Proyectos/>
    
    </>
  )
}

export default App
