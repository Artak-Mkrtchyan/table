import React, { Component } from 'react';

class ColumnName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastName: '',
      newColName: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
  }

  componentWillMount() {
    const { colName } = this.props;
    this.setState({
      ...this.state,
      lastName: colName[colName.length - 1],
    });
  }

  handleChange(event) {
    const { setColName } = this.props;
    const key = event.target.getAttribute('data-key');
    this.setState({
      newColName: event.target.value
    })
    setColName(key, event.target.value);
  }

  save() {
    const { createColumn, colName } = this.props;
    const { newColName, lastName } = this.state;
    createColumn(newColName, lastName);
  }

  render() {
    const { colName } = this.props;
    const colVal = Object.values(colName);
    return (
      <div>
        {colVal.map((name, key) =>
          <input key={key} data-key={key} type='text' value={name} onChange={this.handleChange} />
        )}
        <button onClick={this.save}>SAVE</button>
      </div>
    )
  }
}

export default ColumnName;
