
import { testConstants as C } from "../constants";

export const addLike = () => (
    { type: C.LIKE }
);

export const removeLike = () => ({ type: C.DISLIKE });

export function changeText(e){
    return {
        type: C.CHANGE_TEXT,
        payload: {newText: e.target.value, name: e.target.name}
    }
}