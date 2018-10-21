import React, {Component} from 'react';


class Row extends Component {
  constructor(props) {
    super(props);

    this.state = {
      row: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
  }

  componentWillMount() {
    const { row } = this.props;
    this.setState({
      row: row,
    });
  }

  handleChange(event) {
    const key = event.target.getAttribute('data-key');
    this.setState({
      row: {
        ...this.state.row,
        [key]: event.target.value
      }
    });
  }

  save() {
    const { saveRow, colName, saveRowVal } = this.props;
    const row = Object.values(this.state.row);
    saveRow(row, colName);
    saveRowVal(row);
    this.setState({
      row: row,
    });
  }

  render() {
    const { row } = this.state;
    const rowVal = Object.values(row);
    return (
      <div>
        {rowVal.map((col, key) =>
          <input key={key} data-key={key}  type='text' value={col} onChange={this.handleChange} />
        )}
      <button onClick={this.save}>SAVE</button>
      </div>
    );
  }
}

export default Row;
