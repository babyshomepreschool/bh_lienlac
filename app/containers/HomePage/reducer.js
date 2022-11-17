import produce from "immer";
import {CHANGE_ID} from './constants'

export const initialState = {
    idChild: 'rec9A1OfHnDwCAw59'
}

const homeReducer = (state = initialState, action) =>
    produce(state, draf => {
        switch (action.type) {
            case CHANGE_ID:
                draf.loading = action.idChild;
                break;
            
        }
    });

export default homeReducer;