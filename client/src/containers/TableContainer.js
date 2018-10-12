import React from 'react';
import { connect } from 'react-redux';
import { addRow, addColumn, getName, createColumn } from '../actions/table';
import Table from '../components/Table';


const mapStateToProps = (state) => (console.log('state', state),{
  colName: state.table.colName,
  rows: state.table.rows,
  column: state.table.column,
  nameColumns: state.columnName.nameColumns,
  counterNames: state.columnName.counterNames
});

const mapDispatchToProps = (dispatch) => ({
  addRow: () => dispatch(addRow()),
  addColumn: () => dispatch(addColumn()),
  getName: () => dispatch(getName()),
  setName: (id, name) => dispatch(setName(id, name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
