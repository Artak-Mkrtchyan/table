import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import TableContainer from '../containers/TableContainer';
import TableData from './TableData';
import TableList from './TableList';

class Database extends Component {
  constructor(props) {
    super(props);

    this.state = {
      createTable: false,
    }

    this.createTable = this.createTable.bind(this);
    this.showTableList = this.showTableList.bind(this);
    this.showTable = this.showTable.bind(this);
  }

  componentWillMount() {
    const { showTables } = this.props;
    showTables();
  }

  createTable(e) {
    e.preventDefault()
      this.setState({ createTable: !this.state.createTable });
  }

  showTableList() {
    this.setState({
      ...this.state,
      isLoaded: true
    });
  }

  showTable() {
    this.setState({
      ...this.state,
      showTable: true
    });
  }

 render() {
   const {
     showTables,
     createColumn,
     createTable,
     tablesName,
     setActiveTable,
     getRow,
     emptyTable
    } = this.props;

   return (
     <div>
      {this.state.createTable &&
        <TableData
          createColumn={createColumn}
          createTable={createTable}
          showTables={showTables}
        />
      }
      {!this.state.createTable && (
        <div>
          <form>
            <input type="submit" value="Create table" onClick={this.createTable} />
          </form>
        </div>
      )}
      <input type="submit" value="Show tables" onClick={this.showTableList} />
      <input type="submit" value="Show table" onClick={this.showTable} />
      {this.state.isLoaded &&
        <TableList
          setActiveTable={setActiveTable}
          tablesName={tablesName}
          showTables={showTables}
          getRow={getRow}
          emptyTable={emptyTable}
        />}
      {this.state.showTable && <TableContainer />}
     </div>
   )
  }
}

Database.propTypes = {
  getRow: PropTypes.func.isRequired,
  showTables: PropTypes.func.isRequired,
  createColumn: PropTypes.func.isRequired,
  createTable: PropTypes.func.isRequired,
};

export default Database;
