import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { UserSlice } from "./slice/user.slice";
import { SidebarSlice } from "./slice/Sidebar.slice";

export const store = configureStore({
    reducer: {
        [UserSlice.name]: UserSlice.reducer,
        [SidebarSlice.name]: SidebarSlice.reducer,
    },
    middleware:(d)=>d().concat()
})

setupListeners(store.dispatch)