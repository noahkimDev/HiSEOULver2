import { configureStore, createSlice } from "@reduxjs/toolkit";

// interface Member {
//   member: string;
// }

interface Map {
  bigcity: string;
  smallcity: string;
  hospitaltype: string;
}

// const initialState: Map = { member: "" };
const initialState: Map = { bigcity: "", smallcity: "", hospitaltype: "" };

// const checkMember = createSlice({
//   name: "login_member",
//   initialState,
//   reducers: {
//     rememberMember: (state, action) => {
//       state.member = action.payload;
//     },
//     removeMember: (state) => {
//       state.member = "";
//     },
//   },
// });

const checkMapInfo = createSlice({
  name: "map_info",
  initialState,
  reducers: {
    rememberBigCity: (state, action) => {
      state.bigcity = action.payload;
    },
    rememberSmallCity: (state, action) => {
      state.smallcity = action.payload;
    },
    rememberHospitalType: (state, action) => {
      state.hospitaltype = action.payload;
    },
    removeInfo: () => {},
  },
});

// export const { rememberMember, removeMember } = checkMember.actions;
export const { rememberBigCity, rememberHospitalType, rememberSmallCity } =
  checkMapInfo.actions;
export default configureStore({
  reducer: {
    // checkMember: checkMember.reducer,
    checkMapInfo: checkMapInfo.reducer,
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
