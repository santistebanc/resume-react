import React from 'react';
import withLanguage from './withLanguage.js';

import { Label, Container, List } from 'semantic-ui-react';

const content = {
  experienceTitle: ['Experienced with Web Development tools:','Experiencia con herramientas de desarrollo web:']
  ,
  experienceList: [['Package Managers (npm)','Task Runners (Grunt, Gulp)','Compilers (Babel)','Bundlers (Webpack)','Code Quality (ESLint)','Version Control (Git)',,'Utility Libraries (Underscore)','Templating (Handlebars)','CSS Frameworks (Bootstrap, Semantic UI)'],['Package Managers (npm)','Task Runners (Grunt, Gulp)','Compilers (Babel)','Bundlers (Webpack)','Code Quality (ESLint)','Version Control (Git)','Utility Libraries (Underscore)','Templating (Handlebars)','CSS Frameworks (Bootstrap, Semantic UI)']]
  ,
  conceptsTitle: ['Familiar with Web Development concepts:','Familiarizado con conceptos de desarrollo web:']
  ,
  conceptsList: [['asynchronicity','modularization and components','client-server interaction','API use and development','responsive design', 'testing','DOM Manipulation','hosting and deployment'], ['asincronicidad','modularización y componentes','interacción cliente-servidor','uso y desarrollo de APIs','diseño responsivo', 'testing', 'manipulación DOM','hosting y deployment']]
}

const SkillLabel = ({image, title}) => <Label basic image className='skillLabel' size='small'>
    <img src={image}/>{title}
  </Label>;

const Knowledge = ({text, lang}) => (
      <Container fluid>
        <SkillLabel image={"./img/html5.png"} title={"HTML"}/>
        <SkillLabel image={"./img/javascript.png"} title={"Javascript (Vanilla & ES6)"}/>
        <SkillLabel image={"./img/css.png"} title={"CSS"}/>
        <SkillLabel image={"./img/node.png"} title={"node"}/>
        <SkillLabel image={"./img/express.png"} title={"Express"}/>
        <SkillLabel image={"./img/react.svg"} title={"React"}/>
        <SkillLabel image={"./img/meteor.svg"} title={"Meteor"}/>
        <SkillLabel image={"./img/npm.png"} title={"npm"}/>
        <SkillLabel image={"./img/webpack.png"} title={"Webpack"}/>
        <SkillLabel image={"./img/babel.png"} title={"Babel"}/>
        <SkillLabel image={"./img/sass.svg"} title={"less / sass"}/>
        <SkillLabel image={"./img/lodash.png"} title={"Lodash / Underscore"}/>
        <SkillLabel image={"./img/git.png"} title={"git"}/>
        <SkillLabel image={"./img/jquery.png"} title={"jquery"}/>
        <SkillLabel image={"./img/cordova.png"} title={"Cordova / Phonegap"}/>
        <SkillLabel image={"./img/semanticui.png"} title={"Semantic UI"}/>
        <SkillLabel image={"./img/ionic.png"} title={"Ionic"}/>
        <SkillLabel image={"./img/d3.png"} title={"D3"}/>
        <SkillLabel image={"./img/mysql.png"} title={"SQL"}/>
        <SkillLabel image={"./img/mongodb.png"} title={"mongoDB"}/>
        <SkillLabel image={"./img/phaser.png"} title={"Phaser"}/>
        <SkillLabel image={"./img/php.svg"} title={"PHP"}/>
        <SkillLabel image={"./img/csharp.png"} title={"C#"}/>
        <SkillLabel image={"./img/actionscript.png"} title={"Actionscript"}/>
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
