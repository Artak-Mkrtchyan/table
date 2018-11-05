import React, { Component } from 'react';
import classNames from 'classnames';

import ColumnType from './ColumnType';

class TableData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'newTable',
      number: 1
    }

    this.handleChange = this.handleChange.bind(this);
    this.createTables = this.createTables.bind(this);
  }

  handleChange(e) {
    const { showTables } = this.props;
    if(e.target.value === '') {
      e.target.value = ''
    } else if (e.target.type === 'number' && e.target.value > 10 || Math.sign(e.target.value) !== 1) {
      e.target.value = this.state.number
    }
    this.setState({
      ...this.state,
      [e.target.type]: e.target.value
    });
    showTables();
  }

  createTables(lastName, names) {
    const { createColumn, createTable } = this.props;
    const { text } = this.state;
    if (text === '') {
      return
    }
    createTable(text);
    for (let val in names) {
      if(names[val].isReady) {
        const lname = (!names[val - 1]) ? lastName : names[val - 1].name;
        createColumn(names[val].name, lname);
      }
    };
  }

  render() {
    const { isCreateTable, isTableCreate } = this.props;
    const { number } = this.state;
    return (
      <div className={classNames({
        'full nav': true,
        'open':  isTableCreate
      })}>
        <div className="table table__new-info">
          <button className='button button__stndrt' onClick={isCreateTable}>&#8592; Back</button>
          <div>
            <input type="text" placeholder="Name Table" onChange={this.handleChange} />
            <input type="number" placeholder="Number of columns" min="1" max="10" value={number} onChange={this.handleChange} />
            <ColumnType
              numCol={number}
              createTable={this.createTables}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default TableData;
