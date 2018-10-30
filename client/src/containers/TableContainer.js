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
  activeTableName: state.tableList.activeTableName
});

const mapDispatchToProps = (dispatch) => ({
  addEmptyRow: () => dispatch(action.addEmptyRow()),
  addColumn: () => dispatch(action.addColumn()),
  incRowLeng: () => dispatch(action.incRowLeng()),
  incColLeng: () => dispatch(action.incColLeng()),
  decRowLeng: () => dispatch(action.decRowLeng()),
  decColLeng: () => dispatch(action.decColLeng()),
  setRow: (row, rowLastVal) => dispatch(action.setRow(row, rowLastVal)),
  saveRow: (activeTableName, row, colName) => action.saveRow(activeTableName, row, colName),
  delRow: rows => dispatch(action.delRow(rows)),
  delCol: colName => dispatch(action.delCol(colName)),
  deleteRow: (activeTableName, id) => action.deleteRow(activeTableName, id),
  deleteColumn: (activeTableName, name) => action.deleteColumn(activeTableName, name),
  setColName: columnNames => dispatch(action.setColName(columnNames)),
  createColumn: (activeTableName, newColName, lastName) => action.createColumn(activeTableName, newColName, lastName),
  countCol: colLeng => dispatch(action.countCol(colLeng)),
  countRow: rowLeng => dispatch(action.countRow(rowLeng)),
  updateRow: (activeTableName, key, val, id) => action.updateRow(activeTableName, key, val, id),
  changeColTitle: (activeTableName, lastTitle, newTitle) => action.changeColTitle(activeTableName, lastTitle, newTitle),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
