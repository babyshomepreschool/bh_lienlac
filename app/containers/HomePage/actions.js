import { CHANGE_ID } from "./constants";

export function changeIdChild(idChild){
    return {
        type: CHANGE_ID,
        idChild
    }
}