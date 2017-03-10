import React from 'react';
import withLanguage from './withLanguage.js';

import { Label, Container, List } from 'semantic-ui-react';

const content = {
  studies: [
    <span>Estudiante de 10° Semestre de <i>Ingeniería en Tecnologías de Información y Comunicación</i> en el <strong className="blue">Tecnológico de Monterrey</strong> (Graduación Mayo 2017)</span>
    ,
    <span>Estudiante de 10° Semestre de <i>Ingeniería en Tecnologías de Información y Comunicación</i> en el <strong className="blue">Tecnológico de Monterrey</strong> (Graduación Mayo 2017)</span>
  ],
  experienceTitle: ['Experienced with Web Development tools:','Experiencia con herramientas de desarrollo web:']
  ,
  experienceList: [['Package Managers (npm)','Task Runners (Grunt, Gulp)','Compilers (Babel)','Bundlers (Webpack)','Code Quality (ESLint)','Version Control (Git)'],['Package Managers (npm)','Task Runners (Grunt, Gulp)','Compilers (Babel)','Bundlers (Webpack)','Code Quality (ESLint)','Version Control (Git)']]
  ,
  conceptsTitle: ['Familiar with Web Development concepts:','Familiarizado con conceptos de desarrollo web:']
  ,
  conceptsList: [['asynchronicity','modularization and components','client-server interaction','API use and development','responsive design','DOM Manipulation','hosting and deployment'], ['asíncronicidad','modularización y componentes','interacción cliente-servidor','uso y desarrollo de APIs','diseño responsivo','manipulación DOM','hosting y deployment']]
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
        <SkillLabel image={"./img/d3.png"} title={"D3"}/>
        <SkillLabel image={"./img/meteor.svg"} title={"Meteor"}/>
        <SkillLabel image={"./img/phaser.png"} title={"Phaser"}/>
        <SkillLabel image={"./img/unity.png"} title={"Unity"}/>
        <SkillLabel image={"./img/office.png"} title={"MS Office"}/>
        <br/><br/>
        <List bulleted horizontal>
          <List.Item><List.Description>{text.experienceTitle}</List.Description></List.Item>
          {text.experienceList.map(item=><List.Item>{item}</List.Item>)}
        </List><br/><br/>
        <List bulleted horizontal>
          <List.Item><List.Description>{text.conceptsTitle}</List.Description></List.Item>
            {text.conceptsList.map(item=><List.Item>{item}</List.Item>)}
        </List>
      </Container>
    );

export default withLanguage(Knowledge, content);
