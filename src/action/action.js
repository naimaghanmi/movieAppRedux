import {ADD_MOVIE,EDIT_MOVIE,DELETE_MOVIE,RATE_FILTER,NAME_FILTER} from "./actionType"


export const addMovie=(payload)=>{
    return{type:ADD_MOVIE,payload}
}
export const edit_movie=(id,payload)=>{
    return{type:EDIT_MOVIE,id,payload}
}
export const delete_movie=(payload)=>{
    return {type:DELETE_MOVIE,payload}
}
export const rate_filter=(payload)=>{
    return{type:RATE_FILTER,payload}
}
export const name_filter=(payload)=>{
    return{type:NAME_FILTER,payload}
}
