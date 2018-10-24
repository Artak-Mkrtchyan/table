import axios from 'axios';

export default {
  createColumn: (newColName, lastName) =>
    axios.post(
      'http://localhost:5000/create_column', {newColName, lastName})
      .then(res => {res.data.user
      console.log('addCol',res.data)}),
  getRow: () =>
    axios.post(
      'http://localhost:5000/get_row',
      {}).then(res => res.data.results),
  saveRow: (row, colName) =>
    axios.post(
      'http://localhost:5000/save_row', {row, colName})
      .then(res => {console.log(res.data)}),
  updateRow: (key, val, id) =>
    axios.post(
      'http://localhost:5000/update_row', {key, val, id})
      .then(res => {console.log(res.data)}),
  changeColTitle: (lastTitle, newTitle) =>
      axios.post(
        'http://localhost:5000/change_col_title', {lastTitle, newTitle})
        .then(res => {console.log(res.data)})
}
