import { configureStore, createSlice } from "@reduxjs/toolkit";

interface Member {
  member: string;
}

const initialState: Member = { member: "" };

const checkMember = createSlice({
  name: "login_member",
  initialState,
  reducers: {
    rememberMember: (state, action) => {
      // console.log(
      //   "state.member " + state.member,
      //   "payload : " + action.payload
      // );
      state.member = action.payload;
      // return state;
      // console.log("state.member with payload " + state.member);
    },
    removeMember: (state) => {
      state.member = "";
    },
  },
});
export const { rememberMember, removeMember } = checkMember.actions;
export default configureStore({
  reducer: {
    checkMember: checkMember.reducer,
  },
});
// import { configureStore, createSlice } from "@reduxjs/toolkit";

// let user = createSlice({
//   name: "이름",
//   initialState: "값",
// });

// export default configureStore({
//   reducer: {
//     user: user.reducer,
//   },
// });
// ...

// typescript-redux
