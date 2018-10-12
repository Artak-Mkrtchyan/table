import React, { Component } from 'react';

class ColumnName extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { colName } = this.props;
    console.log('colName', colName);
    return (
      <div>
        {colName.map((name, key) =>
          <input key={key} type='text' value={name} />
        )}
      </div>
    )
  }
}

export default ColumnName;
