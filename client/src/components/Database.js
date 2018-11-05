import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TableData from './TableData';
import TableList from './TableList';
import * as action from '../actions/table';

import './styles.pcss';

class Database extends Component {
  constructor(props) {
    super(props);

    this.state = {
      createTable: false,
      test: false
    }

    this.createTable = this.createTable.bind(this);
    this.showTableList = this.showTableList.bind(this);
  }

  componentWillMount() {
    const { showTables } = this.props;
    showTables();
    setTimeout(function() {
       this.setState({
        ...this.state,
        test: !this.state.test
      })
    }.bind(this), 100)
  }

  createTable() {
    this.setState({
      ...this.state,
      createTable: !this.state.createTable
    });
  }

  showTableList() {
    this.setState({
      ...this.state,
      isLoaded: !this.state.isLoaded
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
      {/* {this.state.createTable && */}
        <TableData
          isCreateTable={this.createTable}
          createColumn={createColumn}
          createTable={createTable}
          showTables={showTables}
          isTableCreate={this.state.createTable}
        />
      {/* } */}
      {/* {(!this.state.createTable && !this.state.isLoaded) && */}
        <div
          className={classNames({
            'full page': true,
            'swipe-lft':  this.state.createTable || this.state.isLoaded
          })}
        >
          <div className="main-btn-group">
            <button className='main-button' onClick={this.createTable}>Create table</button>
            <button className='main-button' onClick={this.showTableList}>Show tables</button>
          </div>
        </div>
      {/* } */}
      {/* {this.state.isLoaded && */}
      {this.state.test &&
        <TableList
          showTableList={this.showTableList}
          setActiveTable={setActiveTable}
          tablesName={tablesName}
          showTables={showTables}
          getRow={getRow}
          emptyTable={emptyTable}
          isLoaded={this.state.isLoaded}
        />}
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

export default connect(
  null,
  action) (Database);
