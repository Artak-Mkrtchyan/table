import React, { Component } from 'react';
import { connect } from "react-redux";
import TableContainer from '../containers/TableContainer';
import PropTypes from 'prop-types';

import { getRow } from '../actions/table';

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

  componentDidMount() {
    const { getRow } = this.props;
    getRow();
  }

  handleChange(event) {
    this.setState({ tableName: event.target.value });
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

Database.propTypes = {
  getRow: PropTypes.func,
};

export default connect(null, { getRow }) (Database);
