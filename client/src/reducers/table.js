import {
  ADD_COLUMN,
  ADD_ROW,
  FILL_TABLE
} from '../types';

const initialState = {
    column: 1,
    row: 1
}

export default function table (state = initialState, action) {
  switch (action.type) {
    case ADD_COLUMN:
      // const r = Object.values(state.rows);
      // state.colName.push('');
      // r.map((row) => row.push(''));
      return {
        colName: state.colName,
        rows: {
          ...state.rows
        }
      }
    case ADD_ROW:
      return {
        column: state.column,
        row: state.row + 1,
      }
    case FILL_TABLE:
      return {
        ...state,
        colName: Object.keys(action.row),
        rows: {
          ...state.rows,
          [action.rowId]: Object.values(action.row)
        }
      }
    default:
      return state;
  }
};

