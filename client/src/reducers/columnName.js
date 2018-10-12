import {
  GET_NAME,
  SET_NAME
} from '../types';

const initialState = {
  counterNames: 1,
  nameColumns: {
    0: 'fd',
    1: 'dw',
    2: 'ff',
    3: 'gr',
  }
}

export default function nameColumn(state = initialState, action) {
  switch (action.type) {
    case GET_NAME:
      return {
        nameColumns: state.nameColumns
      }
    case SET_NAME:
      // console.log('state ', state, 'action ',action,);
      // action.name.map((data) => {
      //   console.log(Object.keys(data));
      //   console.log(Object.values(data));
      // });
      return {
        counterNames: state.counterNames,
        nameColumns: {
          ...state.nameColumns,
          [action.id]: action.name
        }
      }
    default:
      return state;
  }
}
