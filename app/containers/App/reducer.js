import produce from "immer";
import { LOAD_CHILDREN, LOAD_CHILDREN_ERROR, LOAD_CHILDREN_SUCCESS } from "./constant";

export const initialState = {
    children: {},
    loading: false
}

const appReducer = (state = initialState, action) =>
    produce(state, draf => {
        switch (action.type) {
            case LOAD_CHILDREN:
                draf.loading = true;
                break;
            case LOAD_CHILDREN_SUCCESS:
                draf.children = action.children;
                draf.loading = false;
                break;
            case LOAD_CHILDREN_ERROR:
                draf.children = action.error;
                draf.loading = false;
                break;
        }
    });

export default appReducer;