import {
  SET_TABLE_NAME,
  SET_ACTIVE_TABLE
} from '../types';

const initialState = {
  tablesName: null,
  activeTableName: null
}

export default function tableList(state = initialState, action) {
  switch (action.type) {
    case SET_TABLE_NAME:
      return {
        ...state,
        tablesName: {
          ...state.tablesName,
          [action.tableNameId]: Object.values(action.tableNames)
        }
      };
    case SET_ACTIVE_TABLE:
      return {
        ...state,
        activeTableName: action.activeTableName
      }
    default:
      return state;
  }
}
