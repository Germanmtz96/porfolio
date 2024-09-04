import React from 'react'
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code'
import Avatar from "@mui/material/Avatar";
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import react from '../assets/iconos/react.png'
import bootstrap from '../assets/iconos/bootstrap.png'
import axios from '../assets/iconos/axios.png'
import cloudinary from '../assets/iconos/cloudinary.png'
import jwt from '../assets/iconos/jwt.png'
import mongodb from '../assets/iconos/mongodb.png'
import node from '../assets/iconos/node-js.png'
import nodemailer from '../assets/iconos/nodemailer.png'
import rest from '../assets/iconos/rest-api.png'

function Proyectos() {
  return (
    <div className='proyectos'>
        <h1 icon={<CodeIcon style={{color:'#1b1b35', marginRight:'5px'}} sx={{ width: 30, height: 30 }}/>} label="Proyectos" className="saira-semi-condensed-semibold" style={{backgroundColor:'white', fontSize:'30px', color:'#1b1b35', marginTop:'60px', marginBottom:'0px',letterSpacing : '0.7px'}}> &lt;/&gt; Proyectos</h1>
        <div className='container-proyecto'>
            <img src="" alt="" />
            <h1 className="saira-semi-condensed-semibold" style={{color: '#1b1b35', fontSize: '22px', margin:'0px'}}>Reixelnails - Gestor de citas e interacción social</h1>
            <div className='etiquetas-proyecto'>

            <Chip style={{backgroundColor:'#0f0f3e', color:'white', padding:'5px', marginRight:'10px', marginBottom:'10px'}} size="small" label='React' avatar={<Avatar src={react} style={{backgroundColor:'#1b1b3500', height:'18px', width:'18px', padding:'5px'}}/>} />
            <Chip style={{backgroundColor:'#bb84d5', color:'white', padding:'5px', marginRight:'10px', marginBottom:'10px'}} size="small" label='Bootstrap' avatar={<Avatar src={bootstrap} style={{backgroundColor:'#1b1b3500', height:'18px', width:'18px', padding:'5px'}}/>} />
            <Chip style={{backgroundColor:'#ddbf27', color:'white', padding:'5px', marginRight:'10px', marginBottom:'10px'}} size="small" label='Node.js' avatar={<Avatar src={node} style={{backgroundColor:'#1b1b3500', height:'18px', width:'18px', padding:'5px'}}/>} />
            <Chip style={{backgroundColor:'#ff9532', color:'white', padding:'5px', marginRight:'10px', marginBottom:'10px'}} size="small" label='Mongodb' avatar={<Avatar src={mongodb} style={{backgroundColor:'#1b1b3500', height:'18px', width:'18px', padding:'5px'}}/>} />
            <Chip style={{backgroundColor:'#548e39', color:'white', padding:'5px', marginRight:'10px', marginBottom:'10px'}} size="small" label='jwt' avatar={<Avatar src={jwt} style={{backgroundColor:'#1b1b3500', height:'18px', width:'18px', padding:'5px'}}/>} />
            <Chip style={{backgroundColor:'#40a08c', color:'white', padding:'5px', marginRight:'10px', marginBottom:'10px'}} size="small" label='REST API' avatar={<Avatar src={rest} style={{backgroundColor:'#1b1b3500', height:'18px', width:'18px', padding:'5px'}}/>} />
            <Chip style={{backgroundColor:'#6340a0', color:'white', padding:'5px', marginRight:'10px', marginBottom:'10px'}} size="small" label='Axios' avatar={<Avatar src={axios} style={{backgroundColor:'#1b1b3500', height:'18px', width:'18px', padding:'5px'}}/>} />
            <Chip style={{backgroundColor:'#ff3932', color:'white', padding:'5px', marginRight:'10px', marginBottom:'10px'}} size="small" label='Cloudinary' icon={<CloudUploadIcon style={{color:'white', height:'18px', width:'18px', padding:'5px'}}/>} />
            <Chip style={{backgroundColor:'#a04057', color:'white', padding:'5px', marginRight:'10px', marginBottom:'10px'}} size="small" label='Nodemailer' avatar={<Avatar src={nodemailer} style={{backgroundColor:'#1b1b3500', height:'18px', width:'18px', padding:'5px'}}/>} />

            </div>
            <p className="saira-semi-condensed-regular">
            Desarrollo de una aplicación web Full-Stack que permite a los usuarios, tras un proceso de autenticación, registrarse para gestionar citas o interactuar con imágenes mediante comentarios y "likes" desde cualquier dispositivo. Las imágenes y citas son publicadas exclusivamente por un administrador, quien también gestiona una agenda privada con todas las fechas y horarios de las citas, así como una base de datos que almacena los datos de contacto de todos los usuarios. Creado desde cero con Express.js, React y Bootstrap.
            </p>
            <div className='enlaces-proyecto'>
            <Button variant="outlined" size="medium">
          Code
        </Button>
        <Button variant="outlined" size="medium" style={{backgroundColor:'#f3f3f3', textTransform:'capitalize'}}>
            
          Preview
        </Button>
            </div>
        </div>
    </div>
  )
}

export default Proyectos