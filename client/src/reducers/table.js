import {
  ADD_COLUMN,
  ADD_ROW,
  FILL_TABLE,
  SET_COL_NAME,
  INC_COL,
  INC_ROW,
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
      console.log('SET_COL_NAME',state, action)
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
    case INC_COL:
      return {
        ...state,
        colLeng: action.colLeng,
      }
    case INC_ROW:
      return {
        ...state,
        rowLeng: action.rowLeng,
      }
    default:
      return state;
  }
};

