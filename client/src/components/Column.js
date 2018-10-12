import React, { Component } from 'react';

import Row from './Row';

export default class Column extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    const { row, column } = this.props;
    const columns = Array.from({length: column}, (e, i)=>i);
    return (
      <div>
        {/* {columns.map((e, key) =>
          <Row
              key={key}
              row={row}
          />
        )} */}
      </div>
    );
  }
}
