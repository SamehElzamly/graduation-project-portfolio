import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const docmentationSlice = createSlice({
  name: 'docmentationSlice',
  initialState,
  reducers: {
    getValue: (state) => {
        return state.value
    },
    changeValue: (state,action) => {
        return action.payload
    },
    },
})

// Action creators are generated for each case reducer function
export const { getValue, changeValue } = docmentationSlice.actions

export default docmentationSlice.reducer