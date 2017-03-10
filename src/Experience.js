import React from 'react';
import withLanguage from './withLanguage.js';

import { Table, Container, Label } from 'semantic-ui-react';


const content = {
  now: ['Now', 'Ahora'],
  studies: [<span>Student in 10th Semester of <i>Informatics Engineering</i> at <strong className="blue">Tecnológico de Monterrey</strong> (Graduation May 2017)</span>
  ,
  <span>Estudiante de 10° Semestre de <i>Ingeniería en Tecnologías de Información y Comunicación</i> en el <strong className="blue">Tecnológico de Monterrey</strong> (Graduación Mayo 2017)</span>
],
  mls: [<span>Internship in Web Development at <strong className="blue">Market Logic Software</strong> in Berlin</span>
  ,
  <span>Práctica profesional en desarrollo web en <strong className="blue">Market Logic Software</strong> en Berlin</span>
],
  furtwangen: [<span>Exchange Semester in Germany at the  University <strong className="blue">Hochschule Furtwangen</strong> with DAAD scholarship</span>
  ,
  <span>Semestre de estudios de intercambio en Alemania en la universidad <strong className="blue">Hochschule Furtwangen</strong> con beca de DAAD</span>
],
  aisa: [<span>Internship at <strong className="blue">AISA</strong>, Development of management system for government agency of public property registry (<i>Registro Público de la Propiedad</i>)</span>
  ,
  <span>Práctica profesional en <strong className="blue">AISA</strong>, proyecto de desarrollo de sistema de gestión para el <i>Registro Público de la Propiedad</i></span>
]
}

const Experience = ({text, lang}) => (
      <Container>
        <Table compact>
          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>
                <Label ribbon>{text.now}</Label>
              </Table.Cell>
              <Table.Cell>{text.studies}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell><Label ribbon>2016</Label></Table.Cell>
              <Table.Cell>{text.mls}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell><Label ribbon>2015</Label></Table.Cell>
              <Table.Cell>{text.furtwangen}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell><Label ribbon>2015</Label></Table.Cell>
              <Table.Cell>{text.aisa}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    )

export default withLanguage(Experience, content);
