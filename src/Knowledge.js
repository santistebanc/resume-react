import React from 'react';
import withLanguage from './withLanguage.js';

import { Label, Container } from 'semantic-ui-react';

const content = {
  studies: [
    <span>Estudiante de 10° Semestre de <i>Ingeniería en Tecnologías de Información y Comunicación</i> en el <strong className="blue">Tecnológico de Monterrey</strong> (Graduación Mayo 2017)</span>
    ,
    <span>Estudiante de 10° Semestre de <i>Ingeniería en Tecnologías de Información y Comunicación</i> en el <strong className="blue">Tecnológico de Monterrey</strong> (Graduación Mayo 2017)</span>
  ],
  knowledge: ['Knowledge','Conocimiento'],
  projects: ['Projects','Proyectos'],
  experience: ['Education and Professional Experience', 'Estudios y Experiencia Profesional']
}

const SkillLabel = ({image, title}) => <Label basic image className='skillLabel' size='small'>
    <img src={image}/>{title}
  </Label>;

const Knowledge = ({text, lang}) => (
      <Container fluid>
        <SkillLabel image={"./img/html5.png"} title={"HTML"}/>
        <SkillLabel image={"./img/javascript.png"} title={"javascript | ES6"}/>
        <SkillLabel image={"./img/css.png"} title={"CSS"}/>
        <SkillLabel image={"./img/csharp.png"} title={"C#"}/>
        <SkillLabel image={"./img/actionscript.png"} title={"Actionscript 3"}/>
        <SkillLabel image={"./img/node.png"} title={"node"}/>
        <SkillLabel image={"./img/git.png"} title={"git"}/>
        <SkillLabel image={"./img/jquery.png"} title={"jquery"}/>
        <SkillLabel image={"./img/sass.svg"} title={"less / sass"}/>
        <SkillLabel image={"./img/mysql.png"} title={"mySQL"}/>
        <SkillLabel image={"./img/mongodb.png"} title={"mongoDB"}/>
        <SkillLabel image={"./img/react.svg"} title={"React"}/>
        <SkillLabel image={"./img/meteor.svg"} title={"Meteor"}/>
        <SkillLabel image={"./img/phaser.png"} title={"Phaser"}/>
        <SkillLabel image={"./img/unity.png"} title={"Unity"}/>
        <SkillLabel image={"./img/office.png"} title={"MS Office"}/>
        <br/>
        <ul>
          <li>Asincronicidad, modularización (paquetes: import y export), control de versiones (git), interacción cliente-servidor, seguridad web, documentación.
          </li>
          <li>
          Programación orientada a objetos, estructuras de datos, bases de datos, redes, servidores, sistemas operativos, seguridad informática, cloud computing
          </li>
        </ul>
      </Container>
    );

export default withLanguage(Knowledge, content);
