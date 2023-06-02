import React, { Component } from 'react'
import { NumberList } from './configuration'

export default class Number extends Component {
     constructor() {
          super()
     }
     addText = (obj) => {
          let numberValue = NumberList[obj]
          if (typeof (numberValue) === 'string') {
               this.props.textValueUpdate(numberValue)
          } else if (typeof(numberValue) === 'number') {
               this.props.textValueUpdate(numberValue)
          } else if (numberValue.props.value === 'remove') {
               this.props.textValueUpdate(numberValue.props.value)
          }
     }
     render() {
          return (
               <>
                    <div className={`flex flex-wrap justify-center items-center h-28 w-auto`}>
                         {NumberList.map((smile, j) => {
                              return (
                                   <div key={j} className={`border-2 border-red-500 ${(typeof (smile) == 'string') ? 'w-8' : 'w-9'} h-7 text-sm font-semibold border-black  text-center p-1 hover:bg-blue-800`} onClick={() => { this.addText(j) }}>
                                        {smile}
                                   </div>
                              )
                         })}
                    </div>
               </>
          )
     }
}
