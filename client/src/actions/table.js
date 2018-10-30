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
  SET_TABLE_NAME,
  SET_ACTIVE_TABLE,
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

export const emptyTable = () => (
  rowId = 0,
  {type: EMPTY_TABLE}
);

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

let tableNameId = 0;
export const setTableName = (tableNames) => ({
  type: SET_TABLE_NAME,
  tableNameId: tableNameId++,
  tableNames,
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

export const setActiveTable = (activeTableName) => ({
  type: SET_ACTIVE_TABLE,
  activeTableName
})

export const updateRow = (activeTableName, key, val, id) => {
  api.updateRow(activeTableName, key, val, id);
};

export const changeColTitle = (activeTableName, lastTitle, newTitle) => {
  api.changeColTitle(activeTableName, lastTitle, newTitle);
};

export const createColumn = (activeTableName, newColName, lastName) => {
  api.createColumn(newColName, lastName);
};

export const getRow = (activeTableName) => dispatch =>
  api.getRow(activeTableName).then(data => {
    data.map(row => dispatch(fillTable(row)));
});

export const saveRow = (activeTableName, row, colName) => {
  api.saveRow(activeTableName, row, colName);
};

export const deleteRow = (activeTableName, id) => {
  api.deleteRow(activeTableName, id);
};

export const deleteColumn = (activeTableName, name) => {
  api.deleteColumn(activeTableName, name);
};

export const createTable = (nameTable) => {
  api.createTable(nameTable);
}

export const showTables = () => dispatch =>
  api.showTables().then(tables => {
    tables.map(tableName => dispatch(setTableName(tableName)));
  });

