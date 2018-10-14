import React, {Component} from 'react';


class Row extends Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
  }

  componentWillMount() {
    const { row } = this.props;
    this.setState({
      row
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
    const { saveRow, colName } = this.props;
    // console.log(this.state);
    const row = Object.values(this.state.row);
    // console.log(rowVal);
    saveRow(row, colName);
  }

  render() {
    const { row } = this.state;
    const rowVal = Object.values(row);
    // console.log('row', this.props.row, this.state);
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
