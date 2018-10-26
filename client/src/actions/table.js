import {
  ADD_COLUMN,
  ADD_ROW,
  SET_ROW,
  DEL_ROW,
  DEL_COL,
  FILL_TABLE,
  SET_COL_NAME,
  SET_COL_LENGTH,
  SET_ROW_LENGTH,
  INC_LEN_ROW,
  INC_LEN_COL,
  DEC_LEN_COL,
  DEC_LEN_ROW,
} from '../types';
import api from '../api';


export const addColumn = () => ({
 type: ADD_COLUMN
});

export const addEmptyRow = () => ({
  type: ADD_ROW
});

export const setRow = (row, rowLastVal) => ({
  type: SET_ROW,
  row,
  rowLastVal
});

export const setColName = (columnNames) => ({
  type: SET_COL_NAME,
  columnNames,
});

let rowId = 0;
export const fillTable = (row) => ({
  type: FILL_TABLE,
  rowId: rowId++,
  row,
});

export const countCol = (colLeng) => ({
  type: SET_COL_LENGTH,
  colLeng
});

export const countRow = (rowLeng) => ({
  type: SET_ROW_LENGTH,
  rowLeng
});

export const delRow = (rows) => ({
  type: DEL_ROW,
  rows
});

export const delCol = (colName) => ({
  type: DEL_COL,
  colName
});

export const incRowLeng = () => ({
  type: INC_LEN_ROW,
});

export const incColLeng = () => ({
  type: INC_LEN_COL,
});

export const decRowLeng = () => ({
  type: DEC_LEN_ROW,
});

export const decColLeng = () => ({
  type: DEC_LEN_COL,
});

export const updateRow = (key, val, id) => {
  api.updateRow(key, val, id);
};


export const changeColTitle = (lastTitle, newTitle) => {
  api.changeColTitle(lastTitle, newTitle);
};

export const createColumn = (newColName, lastName) => {
  api.createColumn(newColName, lastName);
};

export const getRow = () => dispatch =>
  api.getRow().then(data => {
    Object.keys(data.map(row => dispatch(fillTable(row))));
});

export const saveRow = (row, colName) => {
  api.saveRow(row, colName);
};

export const deleteRow = id => {
  api.deleteRow(id);
};

export const deleteColumn = name => {
  api.deleteColumn(name);
};
