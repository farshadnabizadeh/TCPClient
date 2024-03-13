import { configureStore } from "@reduxjs/toolkit";
import Memo from "./Memo";
const Store = configureStore({
    reducer: {
        Memo: Memo,
    },
});

export default Store;

