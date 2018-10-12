import { combineReducers } from 'redux';

import table from './reducers/table';
import columnName from './reducers/columnName';

export default combineReducers({
  table,
  columnName
});
