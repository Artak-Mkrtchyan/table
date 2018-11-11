import React, { Component } from 'react';

class ColumnType extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lastName: 'id',
      names: {
        0: {
          name: ''
        }
      }
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
    this.setState({
      lastName: 'id'
    })
  }

  render() {
    const { numCol } = this.props;
    const { names } = this.state;

    const arrCol = Array.from(Array(Number(numCol)).keys());

    return(
      <div>
        <div>
          <input type="text" value="id" readOnly="readonly" />
          <select>
            <option value="INT">INT</option>
          </select>
          {arrCol.map((key) => {
            return (
              <div key={key}>
                <input type='text' data-key={key} value={names[key].name} onChange={this.handleChange} />
                <select data-key={key} onChange={this.handleChangeType}>
                  <option value="INT">INT</option>
                  <option value="VARCHAR (255)">VARCHAR</option>
                </select>
              </div>
            );
          })}
        </div>
        <button className='button button__stndrt' type="submit" onClick={this.saveTable}>SAVE TABLE</button>
      </div>
    )
  }
}

export default ColumnType;
