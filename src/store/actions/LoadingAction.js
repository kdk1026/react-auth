import {loadingActions} from "../reducers/LoadingReducer";

function setIsLoading(dispatch, isLoading) {
    dispatch(loadingActions.setIsLoading(isLoading));
}

export const loadingAction = {setIsLoading};