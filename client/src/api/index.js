import axios from 'axios';

export default {
  createColumn: (TableName, newColName, lastName) =>
    axios.post(
      'http://localhost:5000/create_column', {TableName, newColName, lastName})
      .then(res => {console.log(res.data)}),
  getRow: (activeTableName) =>
    axios.post(
      'http://localhost:5000/get_row',
      {activeTableName}).then(res => res.data.results),
  saveRow: (activeTableName, row, colName) =>
    axios.post(
      'http://localhost:5000/save_row', {activeTableName, row, colName})
      .then(res => {console.log(res.data)}),
  updateRow: (activeTableName, key, val, id) =>
    axios.post(
      'http://localhost:5000/update_row', {activeTableName, key, val, id})
      .then(res => {console.log(res.data)}),
  changeColTitle: (activeTableName, lastTitle, newTitle) =>
      axios.post(
        'http://localhost:5000/change_col_title', {activeTableName, lastTitle, newTitle})
        .then(res => {console.log(res.data)}),
  deleteRow: (activeTableName, id) =>
    axios.post(
      'http://localhost:5000/delete_row', {activeTableName, id})
      .then(res => {console.log(res.data)}),
  deleteColumn: (activeTableName, colName) =>
    axios.post(
      'http://localhost:5000/delete_column', {activeTableName, colName})
      .then(res => {console.log(res.data)}),
  createTable: (nameTable) =>
    axios.post(
      'http://localhost:5000/create_table', {nameTable})
      .then(res => {console.log(res.data)}),
  showTables: () =>
    axios.post(
      'http://localhost:5000/show_tables', {})
      .then(res => res.data.results),
}
