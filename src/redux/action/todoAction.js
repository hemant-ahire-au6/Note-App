import { CREATE_TODO, DELETE_TODO } from '../actionTypes'

export const todoAction = {
    create: ([title,body]) => {
        return { type:CREATE_TODO, payload:[title,body] }
    },
    delete: (id) => {
        return { type:DELETE_TODO, payload:id }
    },
}