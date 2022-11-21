import { CHANGE_ID } from "./constants";

export function changeUserId(userId){
    return {
        type: CHANGE_ID,
        userId
    }
}