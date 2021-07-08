import { actionPromise, getRequest, actionUserData } from "../Actions";

export const actionFetchData = () => async (dispatch) => {
    let data = await dispatch(actionPromise("GetRequest", getRequest()));
    // console.log("DATA - ", data);
    dispatch(actionUserData(data));
};
