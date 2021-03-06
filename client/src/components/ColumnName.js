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
      newColId
    } = this.props;
    const { changedIds } = this.state;
    const key = event.target.getAttribute('data-key');
    colName[key] = event.target.value,
    this.setState({
      ...this.state,
      newColName: event.target.value,
    });
    if (Number(newColId) !== Number(key)) {
      this.setState({
        ...this.state,
        changedIds: {
          ...changedIds,
          [key]: key
        },
      });
    }
    setColName(colName);
  }

  deleteCol(event) {
    const { colName, activeTableName, deleteColumn, delCol, decColLeng } = this.props;
    const { changedIds } = this.state;
    const key = event.target.getAttribute('data-key');
    deleteColumn(activeTableName, colName[key]);
    colName.splice(colName.indexOf(key), 1);
    const newCols = [...colName];
    delCol(newCols);
    decColLeng();
    delete changedIds[key],
    this.setState({
      ...this.state,
      changedIds: changedIds,
      lastName: colName[colName.length - 1],
    });
  }

  save() {
    const {
      changeColTitle,
      createColumn,
      colName,
      newColId,
      activeTableName,
      constColName,
      incColLeng,
    } = this.props;
    const {
      changedIds,
      newColName,
      lastName
    } = this.state;
    if (changedIds !== {}) {
      Object.keys(changedIds).map(id => {
        changeColTitle(activeTableName, constColName[id], colName[id]);
        delete changedIds[id],
        this.setState({
          ...this.state,
          changedIds: changedIds,
          lastName: colName[colName.length - 1],
        });
      })
    }
    if (newColName !== "") {
      createColumn(activeTableName, newColName, lastName);
      incColLeng();
      this.setState({
        ...this.state,
        lastName: colName[colName.length - 1],
      });
    }
  }

  render() {
    const { colName } = this.props;
    const colVal = Object.values(colName);
    return (
      <div className="column column__title">
        {colVal.map((name, key) => {
          return (
            <div className="column column__item" key={key}>
              <input className="name-col" data-key={key} type='text' value={name} onChange={this.handleChange} />
              <button className="button button__cross" data-key={key} onClick={this.deleteCol}>X</button>
            </div>
          );
        })}
        <button className='button button__col' onClick={this.save}>SAVE</button>
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
  incColLeng: PropTypes.func.isRequired,
  decColLeng: PropTypes.func.isRequired,
};

export default ColumnName;
