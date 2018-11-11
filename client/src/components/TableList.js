import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TableContainer from '../containers/TableContainer';

export default class TableList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActiveTable: '',
      defaultActiveClass: 0,
      isLoadedTable: false
    }

    this.activeTable = this.activeTable.bind(this);
    this.showTable = this.showTable.bind(this);
  }

  componentWillMount() {
    const { tablesName, setActiveTable } = this.props;
    const { defaultActiveClass } = this.state;
    setActiveTable(tablesName[defaultActiveClass][defaultActiveClass]);
    this.setState({
      ...this.state,
      isActiveTable: tablesName[defaultActiveClass][defaultActiveClass]
    });
    setTimeout(function() {
      this.setState({
       ...this.state,
       isLoadedTable: !this.state.isLoadedTable
     })
   }.bind(this), 100)
  }

  componentDidMount() {
    const { getRow } = this.props;
    const { isActiveTable } = this.state;
    getRow(isActiveTable);
  }

  showTable() {
    this.setState({
      ...this.state,
      showTable: !this.state.showTable
    });
  }

  activeTable(e) {
    const { tablesName, setActiveTable, getRow, emptyTable } = this.props;
    emptyTable();
    const key = e.target.getAttribute('data-key');
    this.setState({
      ...this.state,
      isActiveTable: tablesName[key][0]
    })
    setActiveTable(tablesName[key][0]);
    getRow(tablesName[key][0]);
  }

  render() {
    const {
      tablesName,
      showTableList,
      isLoaded
    } = this.props;
    const { isLoadedTable } = this.state;

    return (
      <div className={classNames({
        'full nav': true,
        'open':  isLoaded
      })}>
          <div className={classNames({
            'full page2': true,
            'swipe-lft2':  this.state.showTable
          })}>
            <div className="table table__list">
              <button className='button button__stndrt' onClick={showTableList}>&#8592; Back</button>
                {Object.values(tablesName).map((name, key) =>
                  <div className='table-name' data-key={key} key={key} onClick={this.activeTable}>
                    {name}
                  </div>
                )}
              <button className='button button__stndrt' onClick={this.showTable}>Show table</button>
            </div>
          </div>
        {isLoadedTable &&
          <TableContainer
           showTable={this.showTable}
           isShowTable={this.state.showTable}
          />}
      </div>
    );
  }
}

TableList.propTypes = {
  getRow: PropTypes.func.isRequired,
  showTables: PropTypes.func.isRequired,
  setActiveTable: PropTypes.func.isRequired,
  tablesName: PropTypes.object.isRequired,
  emptyTable: PropTypes.func.isRequired,
};
