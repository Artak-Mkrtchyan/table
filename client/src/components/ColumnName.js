import React, { Component } from 'react';

class ColumnName extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
  }

  handleChange(event) {
    const { setColName } = this.props;
    console.log('state', this.state, 'event', event.target.getAttribute('data-key'));
    const key = event.target.getAttribute('data-key');
    setColName(key, event.target.value);
  }

  save() {

  }

  render() {
    const { colName } = this.props;
    console.log('colName', colName);
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
