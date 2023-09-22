import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const getproduit=createAsyncThunk('produit/get',async()=>{
    try{
let result=axios.get('http://localhost:5000/produit/all')
return result
    }catch(error){
    console.log(error)
    }
})

export const addproduit=createAsyncThunk('produit/add',async(user)=>{
    try{
let result=axios.post('http://localhost:5000/produit/add',user)
return result
    }catch(error){
    console.log(error)
    }
})
export const deleteproduit=createAsyncThunk('produit/delete',async(id)=>{
    try{
let result=axios.delete(`http://localhost:5000/produit/${id}`)
return result
    }catch(error){
    console.log(error)
    }
})

export const updateproduit=createAsyncThunk('produit/update',async({id, user})=>{
    try{
let result=axios.put(`http://localhost:5000/produit/${id}`,user)
return result
    }catch(error){
    console.log(error)
    }
})


const initialState = {
 produit:null,
 status:null
}

export const produitSlice = createSlice({
  name: 'produit',
  initialState,
  reducers: {},
  extraReducers:{
    [getproduit.pending]:(state)=>{
        state.status="pending";
    },
    [getproduit.fulfilled]:(state,action)=>{
        state.status="success";
        state.produit=action.payload?.data?.list
    },
    [getproduit.rejected]:(state,action)=>{
        state.status="failed";
    },
    [addproduit.pending]:(state)=>{
        state.status="pending";
    },
    [addproduit.fulfilled]:(state,action)=>{
        state.status="success";
    },
    [addproduit.rejected]:(state,action)=>{
        state.status="failed";
    },
    [deleteproduit.pending]:(state)=>{
        state.status="pending";
    },
    [deleteproduit.fulfilled]:(state,action)=>{
        state.status="success";
    },
    [deleteproduit.rejected]:(state,action)=>{
        state.status="failed";
    },
    [updateproduit.pending]:(state)=>{
        state.status="pending";
    },
    [updateproduit.fulfilled]:(state,action)=>{
        state.status="success";
        state.produit=action.payload?.data?.produit
    },
    [updateproduit.rejected]:(state,action)=>{
        state.status="failed";
    }

  }
})
// Action creators are generated for each case reducer function
export const {} = produitSlice.actions

export default produitSlice.reducer