
    import { createSlice } from "@reduxjs/toolkit";
    const Menu: any = (state: any, action: any) => {
        return {
            state,
            status: action,
        };
    };
    const Id: any = (state: any, action: any) => {
        return {
            state,
            id: action,
        };
    };
    const Memo = createSlice({
        name: "Memo",
        initialState: {
            status: false,
            id: 0,
        },
        reducers: {
            Menu,
            Id,
        },
    });
    export const { Menu: MenuAction, Id: IdAction } = Memo.actions;
    export default Memo.reducer;


