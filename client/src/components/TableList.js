import React, { Component } from 'react';

export default class TableList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActiveTable: '',
      defaultActiveClass: 0
    }

    this.activeTable = this.activeTable.bind(this);
  }

  componentWillMount() {
    const { tablesName, setActiveTable } = this.props;
    const { defaultActiveClass } = this.state;
    setActiveTable(tablesName[defaultActiveClass][defaultActiveClass]);
    this.setState({
      ...this.state,
      isActiveTable: tablesName[defaultActiveClass][defaultActiveClass]
    })
  }

  componentDidMount() {
    const { getRow } = this.props;
    const { isActiveTable } = this.state;
    console.log(isActiveTable);
    getRow(isActiveTable);
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
    const { tablesName } = this.props;
    return (
      <div>
        {Object.values(tablesName).map((name, key) =>
          <div data-key={key} key={key} onClick={this.activeTable}>
            {name}
          </div>
        )}
      </div>
    );
  }
}
