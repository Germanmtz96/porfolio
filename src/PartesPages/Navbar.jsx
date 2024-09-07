import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';

function Navbar() {

    const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop - 60 && pageYOffset < sectionTop + sectionHeight - 60) {
          current = section.getAttribute('id');
        }
      });

      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{display:'flex', justifyContent:'center',marginTop:'-20px'}}>
        <Stack direction="row" className="saira-semi-condensed-medium" spacing={1} style={{ padding: '5px',paddingRight:'20px',paddingLeft:'20px', backgroundColor: '#f0f0f0', borderRadius:'20px', color: "rgb(75 85 99)" }}>
        <a href="#experiencia" className={`navbar ${activeLink === 'experiencia' ? 'active' : ''}`}>Experiencia</a>
        <a href="#proyectos" className={`navbar ${activeLink === 'proyectos' ? 'active' : ''}`}>Proyectos</a>
        <a href="#sobre-mi" className={`navbar ${activeLink === 'sobre-mi' ? 'active' : ''}`}>Sobre mí</a>
      <a href="mailto:germanmtz96@outlook.com" className='navbar'>Contacto</a>
    </Stack>
    </div>
  )
}

export default Navbar