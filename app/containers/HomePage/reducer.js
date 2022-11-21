import produce from "immer";
import {CHANGE_ID} from './constants'

export const initialState = {
    userId: ''
}

const homeReducer = (state = initialState, action) =>
    produce(state, draf => {
        switch (action.type) {
            case CHANGE_ID:
                draf.userId = action.userId;
                break;
            
        }
    });

export default homeReducer;