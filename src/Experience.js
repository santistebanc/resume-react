import React from 'react';
import withLanguage from './withLanguage.js';

import { Table, Container, Label } from 'semantic-ui-react';


const content = {
  now: ['Now', 'Ahora'],
  studies: [<span className="black">Bachelor's Degree in <i>Informatics Engineering</i> at <strong className="blue">Tecnológico de Monterrey</strong> in SLP, Mexico.<p className="jobdesc">Object Oriented Programming, Software Architecture, Data Structures, Databases, Networks, Servers, Operating Systems, IT Security, Cloud Computing</p></span>
  ,
  <span className="black">Título de licenciatura en <i>Ingeniería en Tecnologías de Información y Comunicación</i> del <strong className="blue">Tecnológico de Monterrey</strong> en SLP, México.<p className="jobdesc">Programación orientada a objetos, arquitectura de software, estructuras de datos, bases de datos, redes, servidores, sistemas operativos, seguridad informática, cloud computing</p></span>
],
  mls: [<span className="black">Internship at software development start-up company <strong className="blue">Market Logic Software</strong> in Berlin<p className="jobdesc">Development of UI Components in <i>React.js</i> including graphs and charts with <i>D3.js</i> and dynamic widgets.</p></span>
  ,
  <span className="black">Práctica profesional en compañia start-up de desarrollo de software <strong className="blue">Market Logic Software</strong> en Berlin<p className="jobdesc">Desarrollo de componentes UI en <i>React.js</i> incluyendo gráficas en <i>D3.js</i> y widgets dinámicos</p></span>
],
  furtwangen: [<span className="black">Exchange Semester in Germany at the  University <strong className="blue">Hochschule Furtwangen</strong> with DAAD scholarship</span>
  ,
  <span className="black">Semestre de estudios de intercambio en Alemania en la universidad <strong className="blue">Hochschule Furtwangen</strong> con beca de DAAD</span>
],
  aisa: [<span className="black">Internship at <strong className="blue">AISA</strong>, Development of management system for government agency of public property registry <i>(Registro Público de la Propiedad)</i><p className="jobdesc">Was in charge of designing and programming the UI Forms and Controls using <i>Windows Presentation Foundation</i> framework in C# and a large SQL database.</p></span>
  ,
  <span className="black">Práctica profesional en <strong className="blue">AISA</strong>, proyecto de desarrollo de sistema de gestión para el <i>Registro Público de la Propiedad</i><p className="jobdesc">Encargado de diseñar y programar las formas de la interfaz de usuario y controles utilizando <i>Windows Presentation Foundation</i> en C# y una base de datos en SQL</p></span>
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
