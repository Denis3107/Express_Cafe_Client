import GetProducts from "../../API/GetProducts";

const ACTION_GET_PRODUCT = "ACTION_GET_PRODUCT"
const ACTION_SET_LOADED = "ACTION_SET_LOADED"

const initialState = {
    items: [],
    isLoaded: false
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type){
        case ACTION_GET_PRODUCT:{
            return{...state, items: [...action.products]}
        }
        case ACTION_SET_LOADED:{
            return{...state, isLoaded: action.status}
        }
        default: return state
    }
}

const actionGetProducts = (products) => ({type:ACTION_GET_PRODUCT, products})
const actionSetLoaded = (status) => ({type:ACTION_SET_LOADED, status})

export const getProductThank = (sort) => {
    return  async (dispatch)=> {
        dispatch(actionSetLoaded(false))
        let response = await GetProducts(sort)
        dispatch(actionGetProducts(response.data))
        dispatch(actionSetLoaded(true))

    }
}