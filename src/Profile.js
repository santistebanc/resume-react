import React from 'react';
import withLanguage from './withLanguage.js';

import { Label, Flag } from 'semantic-ui-react';

const content = {
  profile: ['Profile','Perfil'],
  knowledge: ['Knowledge','Conocimiento'],
  projects: ['Projects','Proyectos'],
  experience: ['Education and Professional Experience', 'Estudios y Experiencia Profesional']
}

const LanguageLabel = ({icon, title, desc}) => <Label basic image className='languageLabel'>
    <Flag name={icon}/> <strong>{title}</strong><i style={{fontWeight: 'normal', marginLeft: 5}}>{desc}</i>
  </Label>;

const Profile = ({text, lang}) => <ul>
        <li>Desarrollador Web con enfoque en <strong className="green">Front-End</strong></li>
        <li>Experiencia en diseño y programación de <strong>aplicaciones híbridas</strong> (web y mobile)</li>
        <li>Experiencia en desarrollo de <strong>videojuegos 2D y 3D</strong></li>
        <li>Idiomas:
          <LanguageLabel icon='es' title='Español' desc='nativo'/>
          <LanguageLabel icon='gb' title='Inglés' desc='fluído (TOEFL: 647)'/>
          <LanguageLabel icon='de' title='Alemán' desc='B2'/>
          <LanguageLabel icon='fr' title='Francés' desc='A2'/>
        </li>
        <li>Curioso, proactivo, creativo, amigable, responsable</li>
      </ul>

export default withLanguage(Profile, content);
