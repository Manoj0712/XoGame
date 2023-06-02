import React, { useReducer } from 'react'

const transactionReducer = (state, action) => {
     switch (action.type) {
          case "withdraw":
               return state - action.payload
          case "deposite":
               return state + action.payload
          default:
               return state
     }
}

export default function ReactReduce() {
     const withdraw = (amount) => {
          dispatch({ type: "withdraw", payload: amount })
     }
     const deposite = (amount) => {
          dispatch({ type: "deposite", payload: amount })
     }

     const [state, dispatch] = useReducer(transactionReducer, 1000)
     return (
          <>
          <h3>{`Balance is ${state}`}</h3>
          <button onClick={()=>{withdraw(500)}}>Withdraw</button>
          <button onClick={()=>{deposite(500)}}>Deposite</button>
          </> 
     )
}
