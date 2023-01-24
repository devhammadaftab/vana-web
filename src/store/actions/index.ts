import { ActionConstent} from "constants/store";
import { golf } from "endpoints/index";

export const setName = (payload: String) => {
    return { type: ActionConstent.SET_NAME, payload }
}

export const addScore = async (payload: any) => {
    payload = await golf.add(payload.name, payload.score);
    return { type: ActionConstent.SET_GOLF, payload }
}

export const setGolf = async (payload: String) => {
    payload = await golf.get(payload);
    return { type: ActionConstent.SET_GOLF, payload }
}

export const setLoader = (payload: boolean) => {
    return { type: ActionConstent.SET_APP_LOADER, payload }
}

export const reset = () => {
    return { type: ActionConstent.SET_RESET }
}
