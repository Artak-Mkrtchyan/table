import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Row extends Component {
  constructor(props) {
    super(props);

    this.state = {
      r: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentWillMount() {
    const { row } = this.props;
    this.setState({
      r: row,
    });
  }

  handleChange(event) {
    const key = event.target.getAttribute('data-key');
    this.setState({
      r: {
        ...this.state.r,
        [key]: event.target.value
      }
    });
  }

  save() {
    const {
      row,
      saveRow,
      colName,
      isEmptyRowId,
      keyRow,
      updateRow,
      incRowLeng,
      saveRowVal,
      activeTableName
    } = this.props;
    const { r } = this.state;
    if (isEmptyRowId === keyRow) {
      saveRow(activeTableName, row, colName);
      incRowLeng();
    } else {
      saveRowVal(r, keyRow);
      for (let i = 0; i < colName.length; i++) {
        updateRow(activeTableName, colName[i], r[i], row[0]);
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
    const { r } = this.state;
    const rowItem = Object.values(r);
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
