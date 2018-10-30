import React, { Component } from 'react';

import ColumnType from './ColumnType';

class TableData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'newTable',
      number: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.createTables = this.createTables.bind(this);
  }

  handleChange(e) {
    const { showTables } = this.props;
    this.setState({
      ...this.state,
      [e.target.type]: e.target.value
    });
    showTables();
  }

  createTables(lastName, names) {
    const { createColumn, createTable } = this.props;
    const { text } = this.state;
    if (text === '') {
      return
    }
    createTable(text);
    for (let val in names) {
      if(names[val].isReady) {
        const lname = (!names[val - 1]) ? lastName : names[val - 1].name;
        createColumn(names[val].name, lname);
      }
    };
  }

  render() {
    const { number } = this.state;
    return (
      <div>
        Name: <input type="text" onChange={this.handleChange} />
        Column: <input type="number" min="0" onChange={this.handleChange} />
        <ColumnType
          numCol={number}
          createTable={this.createTables}
        />
      </div>
    );
  }
};

export default TableData;
