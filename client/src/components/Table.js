import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from "react-redux";

import Row from './Row';
import ColumnName from './ColumnName';

import './styles.pcss';

class Table extends Component {
  constructor(props) {
    super(props);

    this.addRow = this.addRow.bind(this);
    this.addCol = this.addCol.bind(this);
  }

  componentDidMount(e) {
    // e.preventDefault();
    // axios.get(`http://localhost:5000/`)
    //   .then(res => {
    //     console.log(res);
    //   })
    // this.props.getRow();
    // console.log('get_row');
  }

  handleSubmit() {
    event.preventDefault();

    const user = {
      name: 'artak'
    };

    // axios.post(`http://localhost:5000/create_table`, { user })
    // .then(res => {
    //   console.log(res);
    //   console.log(res.data);
    // });
  }


  addRow() {
    const { createRow } = this.props;
    createRow();
  }

  addCol() {
    const { rows, addColumn, colName } = this.props;
    const r = Object.values(rows);
    colName.push('');
    r.map((row) => row.push(''));
    addColumn();
  }

  render() {
    const {
      row,
      rows,
      colName,
      saveRow,
      column,
      counterNames,
      nameColumns
    } = this.props;

    const rowArray = Object.values(rows);
    return (
      <div>
        <button onClick={this.addRow}>Add Row</button>
        <button onClick={this.addCol}>Add Column</button>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
        <ColumnName
          colName={colName}
        />
        {rowArray.map((row, key) =>
          <Row
            key={key}
            row={row}
            saveRow={saveRow}
          />
        )}
      </div>
    );
  }
}


export default Table;
