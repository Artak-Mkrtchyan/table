import {
  ADD_COLUMN,
  ADD_ROW,
  SET_ROW,
  FILL_TABLE,
  SET_COL_NAME,
  SET_COL_LENGTH,
  SET_ROW_LENGTH,
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

export const deleteRow = (id) => {
  api.deleteRow(id)
};
