import axios from "axios";
import { toast } from "react-toastify";

const { createSlice } = require("@reduxjs/toolkit");

const url = "https://14148.fullstack.clarusway.com";
const token = sessionStorage.getItem("token");

const categoriesSlice = createSlice({
    name:'categories',
    initialState:{data:[]},
    reducers:{
        getCategories(state, action){
            state.data = action.payload
        },
        createCategory(state, action){
            state.data.push(action.payload)
        },
        deleteCategory(state, action){
            state.data = state.data.filter(c=> c.id !== action.payload)
        },
        editCategory(state, action){
            let index = state.data.findIndex(c=> c.id === action.payload.id)
            state.data[index] = action.payload
        }
    }
})

export const categoriesReducer = categoriesSlice.reducer

// Async action

export const getCategories = ()=>{
    return async(dispatch) => {
        try{
            const res = await axios(`${url}/stock/categories/`, {
                headers:{Authorization:`Token ${token}`}
            })


            if(res.status === 200){
                dispatch(categoriesSlice.actions.getCategories(res.data))
            }

    
        }catch(err){
            console.log(err)
        }
    }
}

export const createCategory = (category)=>{
    return async(dispatch) => {
        try{
            const res = await axios(`${url}/stock/categories/`, {
                method:'POST',
                'Content-Type':'application/json',
                data: category,
                headers:{Authorization:`Token ${token}`}
            })


            if(res.status === 201){
                toast.success('Category Created Successfully!')
                dispatch(categoriesSlice.actions.createCategory(res.data))
            }

    
        }catch(err){
            console.log(err.response.data.detail)
        }
    }
}

export const deleteCategory = (id)=>{
    return async(dispatch) => {
        try{
            const res = await axios(`${url}/stock/categories/${id}`, {
                method:'DELETE',
                'Content-Type':'application/json',
                headers:{Authorization:`Token ${token}`}
            })


            if(res.status === 204){
                toast.success('Category Successfully Deleted!')
                dispatch(categoriesSlice.actions.deleteCategory(id))
            }

    
        }catch(err){
            console.log(err.response.data.detail)
        }
    }
}

export const editCategory = (category)=>{
    return async(dispatch) => {
        try{
            const res = await axios(`${url}/stock/categories/${category.id}/`, {
                method:'PUT',
                'Content-Type':'application/json',
                headers:{Authorization:`Token ${token}`},
                data: category
            })


            if(res.status === 200){
                toast.success('Category Successfully Updated!')
                dispatch(categoriesSlice.actions.editCategory(category))
            }

    
        }catch(err){
            console.log(err)
        }
    }
}