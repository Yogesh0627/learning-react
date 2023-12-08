import React from 'react'
import { AddCount, ReduceCount } from './actionType'

// reducer function for performing operation according to type
const CounterReducer = (state,{type,payLoad}) => {
    switch(type){
        case AddCount:
            return state+payLoad
        case ReduceCount:
            return state-payLoad
        default:
            return state
        }
}

export default CounterReducer
