import React from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/table';
import Table from '../components/Table';


const mapStateToProps = (state) => ({
  colName: state.table.colName,
  rows: state.table.rows,
  rowLeng: state.table.rowLeng,
  colLeng: state.table.colLeng,
});

const mapDispatchToProps = (dispatch) => ({
  addRow: () => dispatch(action.addRow()),
  addColumn: () => dispatch(action.addColumn()),
  saveRow: (row, colName) => action.saveRow(row, colName),
  setColName: (key, e) => dispatch(action.setColName(key, e)),
  createColumn: (newColName, lastName) => action.createColumn(newColName, lastName),
  countCol: (colLeng) => dispatch(action.countCol(colLeng)),
  countRow: (rowLeng) => dispatch(action.countRow(rowLeng)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
