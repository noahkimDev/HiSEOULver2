import { configureStore, createSlice } from "@reduxjs/toolkit";

// interface Member {
//   member: string;
// }

interface User {
  member: string;
}
interface Map {
  bigcity: string;
  smallcity: string;
  hospitaltype: string;
}

const memberState: User = { member: "" };
const initialState1: Map = { bigcity: "", smallcity: "", hospitaltype: "" };

const checkMember = createSlice({
  name: "login_member",
  initialState: memberState,
  reducers: {
    rememberMember: (state, action) => {
      state.member = action.payload;
    },
  },
});

const checkMapInfo = createSlice({
  name: "map_info",
  initialState: initialState1,
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

export const { rememberMember } = checkMember.actions;
export default configureStore({
  reducer: {
    checkMember: checkMember.reducer,
    checkMapInfo: checkMapInfo.reducer,
  },
});
