import React from 'react';
import withLanguage from './withLanguage.js';

import { Label, Flag, List, Icon } from 'semantic-ui-react';

const LanguageLabel = ({icon, title, desc}) => <Label basic image className='languageLabel'>
    <Flag name={icon}/> <strong>{title}</strong><i style={{fontWeight: 'normal', marginLeft: 5}}>{desc}</i>
  </Label>;

const content = {
  developer: [<span>Web Developer with focus on <strong className="green">Front-End</strong></span>
  ,
  <span>Desarrollador Web con enfoque en <strong className="green">Front-End</strong></span>
  ],
  areas: [<span>Experience building Web Apps including <strong>hybrid applications</strong> (web and mobile) and <strong>2D/3D videogames</strong></span>
  ,
  <span>Experiencia creando aplicaciones web incluyendo <strong>aplicaciones híbridas</strong> (web y mobile) y <strong>videojuegos 2D/3D</strong></span>
  ],
  experience: [<span><strong>5+ years</strong> doing Web Development projects and <strong>~1 year</strong> of Professional Experience</span>
  ,
  <span><strong>5+ años</strong> realizando proyectos de Desarrollo Web y <strong>~1 año</strong> de Experiencia Profesional</span>
  ],
  languages: [<span>Languages:
    <LanguageLabel icon='es' title='Spanish' desc='native'/>
    <LanguageLabel icon='gb' title='English' desc='fluent (TOEFL: 647)'/>
    <LanguageLabel icon='de' title='German' desc='B2'/>
    <LanguageLabel icon='fr' title='French' desc='A2'/></span>
    ,
    <span>Idiomas:
      <LanguageLabel icon='es' title='Español' desc='nativo'/>
      <LanguageLabel icon='gb' title='Inglés' desc='fluído (TOEFL: 647)'/>
      <LanguageLabel icon='de' title='Alemán' desc='B2'/>
      <LanguageLabel icon='fr' title='Francés' desc='A2'/></span>
  ],
  qualities: ['Curious, proactive, creative, friendly, responsible', 'Curioso, proactivo, creativo, amigable, responsable']
}

const Profile = ({text, lang}) => <List>
    <List.Item>
      <Icon name='right triangle' />
      <List.Content>{text.developer}</List.Content>
    </List.Item>
    <List.Item>
      <Icon name='right triangle' />
      <List.Content>{text.experience}</List.Content>
    </List.Item>
    <List.Item>
      <Icon name='right triangle' />
      <List.Content>{text.areas}</List.Content>
    </List.Item>
    <List.Item>
      <Icon name='right triangle' />
      <List.Content>{text.languages}</List.Content>
    </List.Item>
    {/*<List.Item>
      <Icon name='right triangle' />
      <List.Content>{text.qualities}</List.Content>
    </List.Item>*/}
  </List>

export default withLanguage(Profile, content);
