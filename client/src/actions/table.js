import {
  ADD_COLUMN,
  ADD_ROW,
  GET_NAME,
  SET_NAME,
  FILL_TABLE,
  SET_COL_NAME
} from '../types';
import api from '../api';


export const addColumn = () => ({
 type: ADD_COLUMN
});

export const addRow = () => ({
  type: ADD_ROW
});

export const getName = () => ({
  type: GET_NAME,
  id
});

export const setName = (name, id) => ({
  type: SET_NAME,
  name,
  id
});

export const setColName = (key, e) => ({
  type: SET_COL_NAME,
  key,
  e
})

let rowId = 0;
export const fillTable = (row) => ({
  type: FILL_TABLE,
  rowId: rowId++,
  row,
});

export const createRow = () => dispatch =>
  api.addRow().then(() => {
    dispatch(addRow());
  });

export const createColumn = (name, id) => dispatch =>
  api.addColumn().then(() => {
    dispatch(setName(name, id));
  });

export const getRow = () => dispatch =>
  api.getRow().then(data => {
    // dispatch(setName(data));
    Object.keys(data.map(row => dispatch(fillTable(row))));
    // data.map((data) => {
    //   dispatch(Object.values(data))
    // });
    // console.log('actions', data);
  });


export  const saveRow = (row, colName) => {
  console.log('save', row);
  api.saveRow(row, colName);
}
