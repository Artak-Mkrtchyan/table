import React, { Component } from 'react';

class ColumnName extends Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
  }

  componentWillMount() {
    const { colName } = this.props;
    this.setState({
      colName
    });
  }

  handleChange(event) {
    console.log('state', this.state, 'event', event.target.getAttribute('data-key'));
    const key = event.target.getAttribute('data-key');
    this.setState({
      colName: {
        ...this.state.colName,
        [key]: event.target.value
      }
    });
  }

  save() {

  }

  render() {
    const { colName } = this.state;
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
