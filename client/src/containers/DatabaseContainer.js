import React from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/table';
import Database from '../components/Database';


const mapStateToProps = (state) => ({
  tablesName: state.tableList.tablesName,
  activeTableName: state.tableList.activeTableName
});

const mapDispatchToProps = (dispatch) => ({
  setActiveTable: (activeTableName) => dispatch(action.setActiveTable(activeTableName)),
  getRow: (activeTableName) => dispatch(action.getRow(activeTableName)),
  createColumn: (newColName, lastName) => action.createColumn(newColName, lastName),
  createTable: (nameTable) => action.createTable(nameTable),
  showTables: () => dispatch(action.showTables()),
  emptyTable: () => dispatch(action.emptyTable())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Database);
