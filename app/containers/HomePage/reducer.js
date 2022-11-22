import produce from 'immer';
import { CHANGE_ID } from './constants';

export const initialState = {
  userId: '',
};

const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_ID:
        draft.userId = action.userId;
        break;
      default:
        break;
    }
  });

export default homeReducer;
