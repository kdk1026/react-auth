import {userActions} from "../reducers/UserReducer";

function setUserInfo(dispatch, userInfo) {
    dispatch(userActions.setUserInfo(userInfo));
}

export const userAction = {setUserInfo};