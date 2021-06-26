import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import MortyApi from './MortyApi'

const initialState = {
  getCharacterByName: [],
  getOneCharacter: [],
  dashboard: [],
  loading: true,
  error: undefined,

}

export const getCharacterByName = createAsyncThunk('app/getCharacterByName',
  async function({ keyword }){   
    const response = await MortyApi.getCharacterByName(keyword)
    return response.results
  }
)

export const getDashBoardInfo = createAsyncThunk('app/getDashBoardInfo',
  async function(){
    const response = await MortyApi.getDashBoardInfo()
    return response.results
  }
)

export const getOneCharacter = createAsyncThunk("app/getOneCharacter",
  async function({ number }){
    const response = await MortyApi.getOneCharacter(number)
    return response
  }
)

export const appSlice = createSlice({
  name: "App",
  initialState,
  reducers: {

  },
  extraReducers: {
    [getDashBoardInfo.fulfilled]: function(state, action){
      state.dashboard = action.payload
    },
    [getCharacterByName.fulfilled]: function(state, action){
      state.getCharacterByName = action.payload
    },
    [getOneCharacter.fulfilled]: function(state, action){
      state.getOneCharacter = action.payload
    }
  }
  
}) 

export default appSlice.reducer