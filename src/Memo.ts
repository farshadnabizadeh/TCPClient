import { createSlice } from "@reduxjs/toolkit";
const Link = (state: any, action: any) => {
    return {
        state,
        id: action,
    };
};
const Memo = createSlice({
    name: "Memo",
    initialState: {
        id: '/',
    },
    reducers: {
        Link
    },
});
export const { Link: LinkAction, } = Memo.actions;
export default Memo.reducer;


