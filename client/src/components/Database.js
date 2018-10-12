import React, { Component } from 'react';
import { connect } from "react-redux";
import TableContainer from '../containers/TableContainer';
import { createColumn, createRow, getRow } from '../actions/table';

class Database extends Component {
  constructor(props) {
    super(props);

    this.state = {
      createTable: false,
      tableName: '',
      error: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.createTable = this.createTable.bind(this);
  }

  componentDidMount(e) {
    // e.preventDefault();
    // axios.get(`http://localhost:5000/`)
    //   .then(res => {
    //     console.log(res);
    //   })
    this.props.getRow();
    // console.log('get_row');
  }

  handleChange(event) {
    this.setState({ tableName: event.target.value });
    console.log(this.state)
  }

  createTable(e) {
    e.preventDefault()
    if(this.state.tableName !== '') {
      this.setState({ createTable: !this.state.createTable });
    } else {
      this.setState({ error: "enter table name"});
    }
  }

 render() {
   return (
     <div>
       {this.state.createTable && <TableContainer />}

       {!this.state.createTable &&
        (
        <div>
        <h1>Create Table</h1>
        <form>
          {this.state.error}
          <input type="text" value={this.state.tableName} onChange={this.handleChange} />
          <input type="submit" value="Create table" onClick={this.createTable} />
        </form>
        </div>
        )}
     </div>
   )
  }
}


export default connect(null, { createColumn, createRow, getRow }) (Database);
