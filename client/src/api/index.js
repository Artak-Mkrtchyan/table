import axios from 'axios';

export default {
  addColumn: (name, after) =>
    axios.post(
      'http://localhost:5000/create_column',
      {name: 'dwesa', after: 'dasda'}).then(res => {res.data.user
      console.log('addCol',res.data)}),
  addRow: () =>
    axios.post(
      'http://localhost:5000/create_row',
      {}).then(res => {res.data.user
        console.log('addrow',res.data)}),
  getRow: () =>
    axios.post(
      'http://localhost:5000/get_row',
      {}).then(res =>
        res.data.results
        // console.log(res.data.results , 'getRow');
      )
}
