import {
  ADD_COLUMN,
  ADD_ROW,
  FILL_TABLE,
  SET_COL_NAME,
  SET_COL_LENGTH,
  SET_ROW_LENGTH,
} from '../types';

const initialState = {
    rowLeng: 1,
    colLeng: 1
}

export default function table (state = initialState, action) {
  switch (action.type) {
    case ADD_COLUMN:
    case ADD_ROW:
      return {
        ...state,
        colName: state.colName,
        rows: {
          ...state.rows
        }
      }
    case SET_COL_NAME:
      return {
        ...state,
        colName: {
          ...state.colName,
          [action.key]: action.e,
        }
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
    case SET_COL_LENGTH:
      return {
        ...state,
        colLeng: action.colLeng,
      }
    case SET_ROW_LENGTH:
      return {
        ...state,
        rowLeng: action.rowLeng,
      }
    default:
      return state;
  }
};

