import React, {Component} from 'react';


class Row extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {
    const { row } = this.props;
    const rowVal = Object.values(row);
    return (
      <div>
        {rowVal.map((col, key) =>
          <input key={key} type='text' value={col} />
        )}
      </div>
    );
  }
}

export default Row;
