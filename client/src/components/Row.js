import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Row extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rowVal: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentWillMount() {
    const { row } = this.props;
    this.setState({
      rowVal: row,
    });
  }

  handleChange(event) {
    const key = event.target.getAttribute('data-key');
    this.setState({
      rowVal: {
        ...this.state.rowVal,
        [key]: event.target.value
      }
    });
  }

  save() {
    const {
      row,
      saveRow,
      colName,
      saveRowVal,
      isEmptyRowId,
      keyRow,
      updateRow
    } = this.props;
    if (isEmptyRowId === keyRow) {
      const row = Object.values(this.state.rowVal);
      saveRow(row, colName);
      saveRowVal(row);
      this.setState({
        rowVal: row,
      });
    } else {
      for (let i = 0; i < colName.length; i++) {
        updateRow(colName[i], Object.values(this.state.rowVal)[i], row[0]);
      }
      saveRowVal(this.state.rowVal);
    }
  }

  delete() {
    const { deleteRow, row } = this.props;
    deleteRow(row[0]);
  }

  render() {
    const { rowVal } = this.state;
    const rowItem = Object.values(rowVal);
    return (
      <div>
        {rowItem.map((col, key) =>
          <input key={key} data-key={key}  type='text' value={col} onChange={this.handleChange} />
        )}
      <button onClick={this.save}>SAVE</button>
      <button onClick={this.delete}>DELETE</button>
      </div>
    );
  }
}

Row.propTypes = {
  changeColTitle: PropTypes.func,
  updateRow: PropTypes.func,
  saveRow: PropTypes.func,
  colName: PropTypes.array,
  keyRow: PropTypes.number,
  isEmptyRowId: PropTypes.number,
  saveRowVal: PropTypes.func,
};

export default Row;
