import {userActions} from "../reducers/UserReducer";

function setUserInfo(dispatch, userInfo) {
    dispatch(userActions.setUserInfo(userInfo));
}

function removeUserInfo(dispatch) {
    dispatch(userActions.removeUserInfo());
}

export const userAction = {setUserInfo, removeUserInfo};