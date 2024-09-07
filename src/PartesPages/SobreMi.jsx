import React from 'react'
import Chip from '@mui/material/Chip';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function SobreMi() {
  return (
    <div>
        <div style={{display:'flex', flexDirection:'row'}}>
        <Chip icon={<PersonOutlineIcon style={{color:'#1b1b35', marginRight:'5px'}} sx={{ width: 30, height: 30 }}/>} style={{backgroundColor:'white', color:'#1b1b35', marginTop:'68px', marginBottom:'80px', marginRight:'-15px'}}></Chip>
        <h1 className="saira-semi-condensed-semibold" style={{backgroundColor:'white', fontSize:'30px', color:'#1b1b35', marginTop:'60px', marginBottom:'100px',letterSpacing : '0.7px'}}>Sobre mí</h1>
        </div>
        <img src="" alt="" srcset="" />
        <p></p>
    </div>
  )
}

export default SobreMi