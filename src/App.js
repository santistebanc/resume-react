import React, { Component } from 'react';
import './App.css';

import { Container, Divider, Icon } from 'semantic-ui-react';
import withLanguage from './withLanguage.js';
import Head from './Head.js';
import Profile from './Profile.js';
import Knowledge from './Knowledge.js';
import Experience from './Experience.js';

const content = {
  profile: ['Profile','Perfil'],
  knowledge: ['Knowledge','Conocimiento'],
  projects: ['Projects','Proyectos'],
  experience: ['Education and Professional Experience', 'Estudios y Experiencia Profesional']
}

const App = ({text, lang}) => (
      <div id="content">
      <Container>
        <Head {...{lang}}/>
        <Divider horizontal><h4><Icon name='user'/>{text.profile}</h4></Divider>
        <Profile {...{lang}}/>
        <Divider horizontal><h4><Icon name='lab'/>{text.knowledge}</h4></Divider>
        <Knowledge {...{lang}}/>
        {/* <Divider horizontal><h4><Icon name='travel'/>{text.projects}</h4></Divider> */}
        <Divider horizontal><h4><Icon name='student'/>{text.experience}</h4></Divider>
        <Experience {...{lang}}/>
      </Container>
      </div>
    );

export default withLanguage(App, content);
