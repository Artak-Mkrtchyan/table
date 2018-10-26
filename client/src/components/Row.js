import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Row extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
  }

  handleChange(event) {
    const { saveRowVal, row } = this.props;
    const key = event.target.getAttribute('data-key');
    row[key] = event.target.value;
    saveRowVal(row);
  }

  save() {
    const {
      row,
      saveRow,
      colName,
      isEmptyRowId,
      keyRow,
      updateRow,
      incRowLeng
    } = this.props;
    if (isEmptyRowId === keyRow) {
      saveRow(row, colName);
      incRowLeng();
    } else {
      for (let i = 0; i < colName.length; i++) {
        updateRow(colName[i], row[i], row[0]);
      }
    }
  }

  delete() {
    const {
      deleteRow,
      row,
      delRow,
      keyRow,
      decRowLeng
    } = this.props;
    delRow(keyRow);
    deleteRow(row[0]);
    decRowLeng();
  }

  render() {
    const { row } = this.props;
    const rowItem = Object.values(row);
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
  changeColTitle: PropTypes.func.isRequired,
  updateRow: PropTypes.func.isRequired,
  delRow: PropTypes.func.isRequired,
  saveRow: PropTypes.func.isRequired,
  deleteRow: PropTypes.func.isRequired,
  colName: PropTypes.array.isRequired,
  keyRow: PropTypes.number.isRequired,
  saveRowVal: PropTypes.func.isRequired,
  isEmptyRowId: PropTypes.number,
  incRowLeng: PropTypes.func.isRequired,
  decRowLeng: PropTypes.func.isRequired,
};

export default Row;
