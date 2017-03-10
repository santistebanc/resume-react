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
  hybrid: [<span>Experienced in design and programming of <strong>hybrid applications</strong> (web and mobile)</span>
  ,
  <span>Experiencia en diseño y programación de <strong>aplicaciones híbridas</strong> (web y mobile)</span>
  ],
  videogames: [<span>Experienced in development of  <strong>2D and 3D videogames</strong></span>
  ,
  <span>Experiencia en desarrollo de <strong>videojuegos 2D y 3D</strong></span>
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
      <List.Content>{text.hybrid}</List.Content>
    </List.Item>
    <List.Item>
      <Icon name='right triangle' />
      <List.Content>{text.videogames}</List.Content>
    </List.Item>
    <List.Item>
      <Icon name='right triangle' />
      <List.Content>{text.languages}</List.Content>
    </List.Item>
    <List.Item>
      <Icon name='right triangle' />
      <List.Content>{text.qualities}</List.Content>
    </List.Item>
  </List>

export default withLanguage(Profile, content);
