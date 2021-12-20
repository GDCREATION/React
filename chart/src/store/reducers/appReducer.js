import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bar:[],
  pie:[]
};


export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setNewBar : (state, action)=>{
      return {
        ...state,
        bar: [...state.bar,action.payload]
      }
      
    },
    setUpdatedBars : (state,action)=>{
      debugger
      return {
        ...state,
        bar: action.payload
      }
    },
    setNewPie : (state, action)=>{
      return {
        ...state,
        pie: [...state.pie,action.payload]
      }
    },
    setUpdatedPies : (state,action)=>{
      state.pie= action.payload
    }
  }
});

export const { setNewBar, setUpdatedBars, setNewPie, setUpdatedPies } = appSlice.actions;


export const getBars = state => {debugger;
  return state.bar.bar;}
export const getPies = state => state.bar.pie;


export default appSlice.reducer;


