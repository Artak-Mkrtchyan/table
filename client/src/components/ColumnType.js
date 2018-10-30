import React, { Component } from 'react';

class ColumnType extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lastName: 'id'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
    this.saveTable = this.saveTable.bind(this);
  }

  componentWillReceiveProps() {
    const { numCol } = this.props;
    for (let i = 0; i <= numCol; i++) {
      this.setState({
        ...this.state,
        names: {
          ...this.state.names,
          [i]: {
            name: "",
            type: "INT",
            isReady: false
          }
        }
      })
    }
  }

  handleChange(e) {
    const key = e.target.getAttribute('data-key');
    this.setState({
      ...this.state,
      names: {
        ...this.state.names,
        [key]: {
          ...this.state.names[key],
          name: e.target.value,
          isReady: e.target.value !== ""
        }
      }
    });
  }

  handleChangeType(e) {
    const key = e.target.getAttribute('data-key');
    this.setState({
      ...this.state,
      names: {
        ...this.state.names,
        [key]: {
          ...this.state.names[key],
          type: e.target.value,
        }
      }
    });
  }

  saveTable() {
    const { createTable } = this.props;
    const { lastName, names } = this.state;
    createTable(lastName, names);
  }

  render() {
    const { numCol } = this.props;
    const arrCol = Array.from(Array(Number(numCol)).keys());
    return(
      <div>
        <input type="text" value="id" readOnly="readonly" />
        <select>
          <option value="INT">INT</option>
        </select>
        {arrCol.map((key) => {
          return (
            <div key={key}>
              <input type='text' data-key={key} onChange={this.handleChange} />
              <select data-key={key} onChange={this.handleChangeType}>
                <option value="INT">INT</option>
                <option value="VARCHAR (255)">VARCHAR</option>
              </select>
            </div>
          );
        })}
        <button type="submit" onClick={this.saveTable}>SAVE TABLE</button>
      </div>
    )
  }
}

export default ColumnType;
