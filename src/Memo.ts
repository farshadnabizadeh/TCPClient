import { createSlice } from "@reduxjs/toolkit";

const Link = (state: any, action: any) => {
    state.id = action.payload; // Assuming action has a payload property
};

const User = (state: any, action: any) => {
    state.userinfo = action.payload; // Assuming action has a payload property
};
const ZohoStorage = (state: any, action: any) => {
    state.zoho = action.payload; // Assuming action has a payload property
};
const Memo = createSlice({
    name: "Memo",
    initialState: {
        id: '/',
        userinfo: null,
        zoho: null
    },
    reducers: {
        Link,
        User,
        ZohoStorage,
    },
});

export const { Link: LinkAction, User: UserAction, ZohoStorage: ZohoStorageAction } = Memo.actions;
export default Memo.reducer;
