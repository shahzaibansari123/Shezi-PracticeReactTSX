// redux toolkit with the builder function

// import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// interface StateType {
//   count: number;
// }

// const initialState: StateType = {
//   count: 0,
// };

// const increment = createAction("Increment");
// const decrement = createAction("Decrement");

// const mainReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(increment, (state) => {
//       state.count += 1;
//     })
//     .addCase(decrement, (state) => {
//       state.count -= 1;
//     });
// });

// export const store = configureStore({ reducer: mainReducer });

// ------------------------------------------------------

// with the slicer method

// import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// export interface StateType {
//   count: number;
// }

// const initialState: StateType = {
//   count: 0,
// };

// const mainReducer = createSlice({
//   name: "Counter",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.count += 1;
//     },
//     decrement: (state) => {
//       state.count -= 1;
//     },
//     incrementByValue: (state, action: PayloadAction<number>) => {
//       state.count += action.payload;
//     },
//   },
// });

// export const { increment, decrement, incrementByValue } = mainReducer.actions;

// export const store = configureStore({ reducer: mainReducer.reducer });
