import { combineReducers } from 'redux';

import table from './reducers/table';
import tableList from './reducers/tableList';

export default combineReducers({
  table,
  tableList
});
