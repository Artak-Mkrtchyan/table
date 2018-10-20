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

  componentDidMount() {
    const {
      rows,
      countCol,
      countRow
    } = this.props;
    const colLeng = Object.values(rows[0]).length;
    const rowLeng = Object.keys(rows).length;
    countCol(colLeng);
    countRow(rowLeng);
  }

  handleSubmit() {
    event.preventDefault();
  }


  addRow() {
    const {
      addRow,
      rows,
      rowLeng,
      countRow
    } = this.props;
    const rowsLen = Object.keys(rows).length;
    if (rowLeng + 1 > rowsLen) {
      const arrVals = Object.values(rows[0]).length;
      const lastKey = Object.keys(rows).pop();
      rows[Number(lastKey) + 1] = Array(arrVals).fill("");
      addRow();
      // countRow(rowLeng + 1);
    }
  }

  addCol() {
    const {
      rows,
      addColumn,
      colName,
      colLeng,
      countCol
    } = this.props;
    const arrVals = Object.values(rows[0]).length;
    if (colLeng + 1 > arrVals) {
      const r = Object.values(rows);
      colName.push('');
      r.map((row) => row.push(''));
      addColumn();
    }
    console.log('addCol', colLeng, arrVals);
  }

  render() {
    const {
      row,
      rows,
      colName,
      saveRow,
      setColName,
      createColumn,
    } = this.props;
    console.log('this.props', this.props);
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
          setColName={setColName}
          createColumn={createColumn}
        />
        {rowArray.map((row, key) =>
          <Row
            key={key}
            row={row}
            saveRow={saveRow}
            colName={colName}
          />
        )}
      </div>
    );
  }
}


export default Table;
