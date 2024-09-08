import React, { useEffect, useRef, useState } from 'react'
import Stack from '@mui/material/Stack';

function Navbar() {

    const [activeLink, setActiveLink] = useState('');
    const [isFixed, setIsFixed] = useState(false);
    const stackRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Determina si el stack debe ser fijo
      const stack = stackRef.current;
      if (stack) {
        const stackOffset = stack.offsetTop;

        if (window.pageYOffset > stackOffset) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }

      // Maneja los enlaces activos
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.pageYOffset >= sectionTop - 60 && window.pageYOffset < sectionTop + sectionHeight - 60) {
          current = section.getAttribute('id');
        }
      });

      setActiveLink(current);
    };

    // Agregar el evento de scroll
    window.addEventListener('scroll', handleScroll);
    
    // Limpiar el evento de scroll cuando el componente se desmonte
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{display:'flex', justifyContent:'center',marginTop:'-20px'}}>
        <Stack direction="row"  className={`${isFixed ? 'fixed' : 'scroll'} saira-semi-condensed-medium`} spacing={1} >
        <a href="#experiencia" className={`navbar ${activeLink === 'experiencia' ? 'active' : ''}`}>Experiencia</a>
        <a href="#proyectos" className={`navbar ${activeLink === 'proyectos' ? 'active' : ''}`}>Proyectos</a>
        <a href="#sobre-mi" className={`navbar ${activeLink === 'sobre-mi' ? 'active' : ''}`}>Sobre mí</a>
      <a href="mailto:germanmtz96@outlook.com" className='navbar'>Contacto</a>
    </Stack>
    </div>
  )
}

export default Navbar