import React from 'react'
import Chip from '@mui/material/Chip';
import WorkIcon from '@mui/icons-material/Work'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function ExpLaboral() {
  return (
    <div className='experiencia-laboral'>
        <div style={{display:'flex', flexDirection:'row'}}>
      <Chip icon={<WorkIcon style={{color:'#1b1b35', marginRight:'5px'}} sx={{ width: 30, height: 30 }}/>} style={{backgroundColor:'white', color:'#1b1b35', marginLeft:'600px', marginTop:'65px', marginBottom:'100px', marginRight:'-15px'}}></Chip>
      <h1 className="saira-semi-condensed-semibold" style={{backgroundColor:'white', fontSize:'30px', color:'#1b1b35', marginTop:'60px', marginBottom:'100px',letterSpacing : '0.7px'}}>Experiencia laboral</h1>
        </div>
      <Timeline style={{ padding: '0', marginLeft: '0' }}>
      <TimelineItem>
        <TimelineSeparator style={{marginBottom:'-30px',height:'420px'}}> 
          <TimelineDot style={{padding:'0px',marginTop:'-40px',marginBottom:'0px', width:'8px', height:'8px'}} color="secondary"/>
          <TimelineConnector style={{padding:'0px',margin:'0px'}}/>
        </TimelineSeparator>
        <TimelineContent>
          <h1 className="saira-semi-condensed-semibold" style={{color: '#ffbc1b', fontSize: '22px', margin:'0px', marginTop:'-70px'}}>Front-end Web Developer</h1>
          <p className="saira-semi-condensed-medium" style={{color: '#1b1b35', fontSize: '18px', margin:'0px'}}>Open to work</p>
          <span className="saira-semi-condensed-regular" style={{color:'#acacbd', fontSize:'14px'}}>Actualmente...</span>
          <p className="saira-semi-condensed-regular">Participé en un programa intensivo de 12 semanas con un total de 450 horas de formación en desarrollo web.
Desarrollé habilidades prácticas en front-end utilizando HTML, CSS, JavaScript, y React y en back-end con Node.js y Express.
Creé proyectos de aplicaciones web reales, incluyendo una aplicación para un cliente real en el sector de la belleza, que incluye autenticación con distintos roles.
Adquirí experiencia en el uso de Visual Studio Code y en trabajo colaborativo utilizando GitHub para control de versiones y gestión de proyectos.</p>
<a href="https://github.com/Germanmtz96" style={{color: '#ffbc1b', fontSize: '22px', textDecoration:'none'}}>Ver Github &gt;</a>
          </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator style={{marginBottom:'-30px',height:'300px'}}>
          <TimelineDot style={{padding:'0px',marginTop:'-40px',marginBottom:'0px', width:'8px', height:'8px'}} color="secondary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h1 className="saira-semi-condensed-semibold" style={{color: '#ffbc1b', fontSize: '22px', margin:'0px', marginTop:'-70px'}}>Operador Polivalente en Supermercado</h1>
          <p className="saira-semi-condensed-medium" style={{color: '#1b1b35', fontSize: '18px', margin:'0px'}}>Mercadona</p>
          <span className="saira-semi-condensed-regular" style={{color:'#acacbd', fontSize:'14px'}}>Mayo 2019</span>
          <p className="saira-semi-condensed-regular">He acumulado experiencia en diversas áreas, como carnicería, charcutería, cajero, reparto, y fruta/verdura, lo que me ha permitido desarrollar una gran adaptabilidad y habilidades de trabajo en equipo, dado que todos estos roles requieren coordinar procesos en cadena.</p>
          </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator style={{marginBottom:'-30px'}}>
          <TimelineDot style={{padding:'0px',marginTop:'-40px',marginBottom:'0px', width:'8px', height:'8px'}} color="secondary"/>
        
        </TimelineSeparator>
        <TimelineContent>
          <h1 className="saira-semi-condensed-semibold" style={{color: '#ffbc1b', fontSize: '22px', margin:'0px', marginTop:'-70px'}}>Cocinero</h1>
          <p className="saira-semi-condensed-medium" style={{color: '#1b1b35', fontSize: '18px', margin:'0px'}}>Domino's Pizza</p>
          <span className="saira-semi-condensed-regular" style={{color:'#acacbd', fontSize:'14px'}}>Abril 2016</span>
          <p className="saira-semi-condensed-regular">Contribuí a la formación del personal en múltiples tiendas que abrieron en la zona de Alicante.</p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  )
}

export default ExpLaboral