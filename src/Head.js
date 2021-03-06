import React from 'react';
import withLanguage from './withLanguage.js';

import { Container, Grid, Segment, Icon } from 'semantic-ui-react';

const content = {
  oport: ['Online Portfolio:','Portfolio en linea:'],
  personal: ["23-year-old Mexican/Spanish (full European citizenship)","Mexicano/Español de 23 años (ciudadano de la Union Europea)"]
}

const Head = ({text, lang}) => <Grid>
          <Grid.Column floated='left' width={11}>
            <h2>Carlos Santisteban Pozas</h2>
            <address>
              <Icon name="mail"/> <a>carlos.santisteban@outlook.com</a>
              <br/>
              <Icon name="call"/> +52 444 414 83 22
              <br/>
              <Icon name="birthday"/> <span className="personaldata">{text.personal}</span>
            </address>
          </Grid.Column>
          <Grid.Column floated='right' width={5}>
            <Segment>
              <Container textAlign='center'>
              <div><Icon name="travel" size='large'/>
              <strong>{text.oport}</strong></div>
              <a href="http://santistebanc.tk">santistebanc.tk</a>
              </Container>
            </Segment>
          </Grid.Column>
        </Grid>

export default withLanguage(Head, content);
