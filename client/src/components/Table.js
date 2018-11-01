import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import Row from './Row';
import ColumnName from './ColumnName';
import * as action from '../actions/table';

import './styles.pcss';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEmptyRowId: null,
      newColId: 99999,
    }

    this.addRow = this.addRow.bind(this);
    this.addCol = this.addCol.bind(this);
    this.saveRowVal = this.saveRowVal.bind(this);
    this.delRow = this.delRow.bind(this);
  }

  componentDidMount() {
    const {
      rows,
      countCol,
      countRow,
    } = this.props;
    const colLeng = Object.values(rows[0]).length;
    const rowLeng = Object.keys(rows).length;
    countCol(colLeng);
    countRow(rowLeng);
  }

  addRow() {
    const {
      addEmptyRow,
      rows,
      rowLeng,
    } = this.props;
    const rowsLen = Object.keys(rows).length;
    if (rowLeng + 1 > rowsLen) {
      const arrVals = Object.values(rows[0]).length;
      const lastKey = Object.keys(rows).pop();
      rows[Number(lastKey) + 1] = Array(arrVals).fill("");
      addEmptyRow();
      this.setState({
        ...this.state,
        isEmptyRowId: rowsLen,
      })
    }
  }

  delRow(id) {
    const { rows, delRow } = this.props;
    delete rows[id];
    const newRows = Object.assign({}, rows);
    delRow(newRows);
  }

  saveRowVal(row, keyRow) {
    const { setRow } = this.props;
    setRow(row, keyRow);
  }

  addCol() {
    const {
      rows,
      addColumn,
      colName,
      colLeng
    } = this.props;
    const arrVals = colName.length;
    if (colLeng + 1 > arrVals) {
      const r = Object.values(rows);
      colName.push('');
      r.map((row) => row.push(''));
      addColumn();
      this.setState({
        ...this.state,
        newColId: arrVals,
      });
    }
  }

  render() {
    const {
      rows,
      colName,
      saveRow,
      delCol,
      deleteRow,
      deleteColumn,
      updateRow,
      setColName,
      createColumn,
      changeColTitle,
      constColName,
      incRowLeng,
      incColLeng,
      decColLeng,
      decRowLeng,
      activeTableName
    } = this.props;
    const { isEmptyRowId, newColId } = this.state;

    const rowArray = Object.values(rows);
    return (
      <div>
        <button onClick={this.addRow}>Add Row</button>
        <button onClick={this.addCol}>Add Column</button>
        <ColumnName
          activeTableName={activeTableName}
          colName={colName}
          setColName={setColName}
          createColumn={createColumn}
          changeColTitle={changeColTitle}
          newColId={newColId}
          constColName={constColName}
          deleteColumn={deleteColumn}
          delCol={delCol}
          incColLeng={incColLeng}
          decColLeng={decColLeng}
        />
        {rowArray.map((row, key) =>
          <Row
            activeTableName={activeTableName}
            incRowLeng={incRowLeng}
            decRowLeng={decRowLeng}
            key={key}
            keyRow={key}
            row={row}
            delRow={this.delRow}
            changeColTitle={changeColTitle}
            updateRow={updateRow}
            isEmptyRowId={isEmptyRowId}
            saveRowVal={this.saveRowVal}
            saveRow={saveRow}
            deleteRow={deleteRow}
            delCol={delCol}
            colName={colName}
          />
        )}
      </div>
    );
  }
}

Table.propTypes = {
  addEmptyRow: PropTypes.func.isRequired,
  addColumn: PropTypes.func.isRequired,
  setRow: PropTypes.func.isRequired,
  saveRow: PropTypes.func.isRequired,
  deleteRow: PropTypes.func.isRequired,
  delCol: PropTypes.func.isRequired,
  deleteColumn: PropTypes.func.isRequired,
  delRow: PropTypes.func.isRequired,
  setColName: PropTypes.func.isRequired,
  createColumn: PropTypes.func.isRequired,
  countCol: PropTypes.func.isRequired,
  countRow: PropTypes.func.isRequired,
  updateRow: PropTypes.func.isRequired,
  changeColTitle: PropTypes.func.isRequired,
  colName: PropTypes.array.isRequired,
  constColName: PropTypes.array.isRequired,
  rows: PropTypes.object.isRequired,
  rowLeng: PropTypes.number.isRequired,
  colLeng: PropTypes.number.isRequired,
  incColLeng: PropTypes.func.isRequired,
  incRowLeng: PropTypes.func.isRequired,
  decColLeng: PropTypes.func.isRequired,
  decRowLeng: PropTypes.func.isRequired,
};


export default connect(
  null,
  action) (Table);
