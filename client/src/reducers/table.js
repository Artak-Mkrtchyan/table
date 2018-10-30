import {
  ADD_COLUMN,
  ADD_ROW,
  SET_ROW,
  DEL_ROW,
  DEL_COL,
  FILL_TABLE,
  EMPTY_TABLE,
  SET_COL_NAME,
  SET_COL_LENGTH,
  SET_ROW_LENGTH,
  INC_LEN_ROW,
  INC_LEN_COL,
  DEC_LEN_COL,
  DEC_LEN_ROW,
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
        colName: action.columnNames
      }
    case FILL_TABLE:
      return {
        ...state,
        colName: Object.keys(action.row),
        constColName: Object.keys(action.row),
        rows: {
          ...state.rows,
          [action.rowId]: Object.values(action.row)
        }
      }
    case EMPTY_TABLE:
      return {
        ...state,
        colName: 1,
        constColName: 1,
        rows: {}
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
    case SET_ROW:
      return {
        ...state,
        rows: {
          ...state.rows,
          [action.rowLastVal]: action.row
        }
      }
    case DEL_ROW:
      return {
        ...state,
        rows: action.rows
      }
    case DEL_COL:
      return {
        ...state,
        colName: action.colName
      }
    case INC_LEN_ROW:
      return {
        ...state,
        rowLeng: state.rowLeng + 1
      }
    case INC_LEN_COL:
      return {
        ...state,
        colLeng: state.colLeng + 1
      }
    case DEC_LEN_ROW:
      return {
        ...state,
        rowLeng: state.rowLeng - 1
      }
    case DEC_LEN_COL:
      return {
        ...state,
        colLeng: state.colLeng - 1
      }
    default:
      return state;
  }
};

