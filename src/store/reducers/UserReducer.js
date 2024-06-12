import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: {}
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserInfo(state, action) {
            state.userInfo = action.payload;
        },
        removeUserInfo(state) {
            state.userInfo = {};
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;