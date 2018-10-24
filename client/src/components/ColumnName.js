import React, { Component } from 'react';

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
        {colVal.map((name, key) =>
          <input key={key} data-key={key} type='text' value={name} onChange={this.handleChange} />
        )}
        <button onClick={this.save}>SAVE</button>
      </div>
    )
  }
}

export default ColumnName;
