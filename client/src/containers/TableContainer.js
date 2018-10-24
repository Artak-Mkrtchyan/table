import React from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/table';
import Table from '../components/Table';


const mapStateToProps = (state) => ({
  colName: state.table.colName,
  constColName: state.table.constColName,
  rows: state.table.rows,
  rowLeng: state.table.rowLeng,
  colLeng: state.table.colLeng,
});

const mapDispatchToProps = (dispatch) => ({
  addEmptyRow: () => dispatch(action.addEmptyRow()),
  addColumn: () => dispatch(action.addColumn()),
  setRow: (row, rowLastVal) => dispatch(action.setRow(row, rowLastVal)),
  saveRow: (row, colName) => action.saveRow(row, colName),
  setColName: (columnNames) => dispatch(action.setColName(columnNames)),
  createColumn: (newColName, lastName) => action.createColumn(newColName, lastName),
  countCol: (colLeng) => dispatch(action.countCol(colLeng)),
  countRow: (rowLeng) => dispatch(action.countRow(rowLeng)),
  updateRow: (key, val, id) => action.updateRow(key, val, id),
  changeColTitle: (lastTitle, newTitle) => action.changeColTitle(lastTitle, newTitle),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
