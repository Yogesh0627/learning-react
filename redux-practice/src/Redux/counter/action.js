import { AddCount, ReduceCount } from "./actionType"


// action and define payload  for reducer function
export const addAction = (payLoad)=>{
    return {type:AddCount,payLoad}
}

export const reduceAction = (payLoad)=>{
    return {type:ReduceCount,payLoad}
}