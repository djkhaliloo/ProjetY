import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const getcommande=createAsyncThunk('commande/get',async()=>{
    try{
let result=axios.get('http://localhost:5000/commande/all')
return result
    }catch(error){
    console.log(error)
    }
})

export const addcommande=createAsyncThunk('commande/add',async(user)=>{
    try{
let result=axios.post('http://localhost:5000/commande/add',user)
return result
    }catch(error){
    console.log(error)
    }
})
export const deletecommande=createAsyncThunk('commande/delete',async(id)=>{
    try{
let result=axios.delete(`http://localhost:5000/commande/${id}`)
return result
    }catch(error){
    console.log(error)
    }
})

export const updatecommande=createAsyncThunk('commande/update',async({id, user})=>{
    try{
let result=axios.put(`http://localhost:5000/commande/${id}`,user)
return result
    }catch(error){
    console.log(error)
    }
})


const initialState = {
 commande:null,
 status:null
}

export const commandeSlice = createSlice({
  name: 'commande',
  initialState,
  reducers: {},
  extraReducers:{
    [getcommande.pending]:(state)=>{
        state.status="pending";
    },
    [getcommande.fulfilled]:(state,action)=>{
        state.status="success";
        state.commande=action.payload.data?.list
    },
    [getcommande.rejected]:(state,action)=>{
        state.status="failed";
    },
    [addcommande.pending]:(state)=>{
        state.status="pending";
    },
    [addcommande.fulfilled]:(state,action)=>{
        state.status="success";
    },
    [addcommande.rejected]:(state,action)=>{
        state.status="failed";
    },
    [deletecommande.pending]:(state)=>{
        state.status="pending";
    },
    [deletecommande.fulfilled]:(state,action)=>{
        state.status="success";
    },
    [deletecommande.rejected]:(state,action)=>{
        state.status="failed";
    },
    [updatecommande.pending]:(state)=>{
        state.status="pending";
    },
    [updatecommande.fulfilled]:(state,action)=>{
        state.status="success";
        state.commande=action.payload.data?.commande
    },
    [updatecommande.rejected]:(state,action)=>{
        state.status="failed";
    }

  }
})
// Action creators are generated for each case reducer function
export const {} = commandeSlice.actions

export default commandeSlice.reducer