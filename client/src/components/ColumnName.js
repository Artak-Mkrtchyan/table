import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ColumnName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastName: '',
      newColName: '',
      changedIds: {},
    }

    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
    this.deleteCol = this.deleteCol.bind(this);
  }

  componentWillMount() {
    const { colName } = this.props;
    this.setState({
      ...this.state,
      lastName: colName[colName.length - 1],
    });
  }

  handleChange(event) {
    const {
      setColName,
      colName,
    } = this.props;
    const { changedIds } = this.state;
    const key = event.target.getAttribute('data-key');
    colName[key] = event.target.value,
    this.setState({
      ...this.state,
      newColName: event.target.value,
      changedIds: {
        ...changedIds,
        [key]: key
      },
    });
    setColName(colName);
  }

  deleteCol(event) {
    const { colName, deleteColumn, delCol } = this.props;
    const key = event.target.getAttribute('data-key');
    deleteColumn(colName[key]);
    delete colName[key];
    const newCols = colName.slice(0);
    delCol(newCols);
  }

  save() {
    const {
      changeColTitle,
      createColumn,
      colName,
      newColId,
      constColName
    } = this.props;
    const {
      changedIds,
      newColName,
      lastName
    } = this.state;
    Object.keys(changedIds).map(id => {
      if (Number(id) !== Number(newColId)) {
        changeColTitle(constColName[id], colName[id]);
        delete changedIds[id],
        this.setState({
          ...this.state,
          changedIds: changedIds,
          lastName: colName[colName.length - 1],
        });
      } else {
        createColumn(newColName, lastName);
      }
    });
  }

  render() {
    const { colName } = this.props;
    const colVal = Object.values(colName);
    return (
      <div>
        {colVal.map((name, key) => {
          return (
            <div key={key}>
              <input data-key={key} type='text' value={name} onChange={this.handleChange} />
              <button data-key={key} onClick={this.deleteCol}>X</button>
            </div>
          );
        })}
        <button onClick={this.save}>SAVE</button>
      </div>
    )
  }
}

ColumnName.propTypes = {
  colName: PropTypes.array.isRequired,
  setColName: PropTypes.func.isRequired,
  createColumn: PropTypes.func.isRequired,
  changeColTitle: PropTypes.func.isRequired,
  constColName: PropTypes.array.isRequired,
  newColId: PropTypes.number.isRequired,
  deleteColumn: PropTypes.func.isRequired,
  delCol: PropTypes.func.isRequired,
};

export default ColumnName;
