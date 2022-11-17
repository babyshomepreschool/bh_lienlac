import {LOAD_CHILDREN, LOAD_CHILDREN_SUCCESS , LOAD_CHILDREN_ERROR} from './constant'

export function loadChildren(){
    return {
        type: LOAD_CHILDREN,
    }
}

export function loadChildrenSuccess(children){
    return {
        type: LOAD_CHILDREN_SUCCESS,
        children
    }
}

export function loadChildrenError(error){
    return {
        type: LOAD_CHILDREN_ERROR,
        error
    }
}