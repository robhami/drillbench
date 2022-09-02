import React, {Component} from 'react';
import GridLayout from "react-grid-layout";
import gridstyles from './gridstyles.css';
import Container from 'react-bootstrap/Container';

class MyFirstGrid extends React.Component {
  render() {
    return (
      <Container>
        <GridLayout className="layout" cols={3} rows={3} rowHeight={30} width={1200}>
          <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}>
            a
          </div>
          <div key="b" data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}>
            b
          </div>
          <div key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>
            c
          </div>
        </GridLayout>
      </Container>

    );
  }
}

export default MyFirstGrid;