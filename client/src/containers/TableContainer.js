import React from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/table';
import Table from '../components/Table';


const mapStateToProps = (state) => (console.log('state', state),{
  colName: state.table.colName,
  rows: state.table.rows,
  column: state.table.column,
  nameColumns: state.columnName.nameColumns,
  counterNames: state.columnName.counterNames
});

const mapDispatchToProps = (dispatch) => ({
  addRow: () => dispatch(action.addRow()),
  addColumn: () => dispatch(action.addColumn()),
  getName: () => dispatch(action.getName()),
  setName: (id, name) => dispatch(action.setName(id, name)),
  saveRow: (row) => action.saveRow(row),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
