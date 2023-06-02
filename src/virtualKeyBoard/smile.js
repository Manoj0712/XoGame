import React, { Component } from 'react'
import KeyBoard from './keyBoard'
import { SmileList } from "./configuration";

export class Smile extends Component {
  constructor(props) {
    super(props)
  }
  addText(obj) {
    var addtext = SmileList[obj]
    if (typeof (addtext) === 'string') {
      this.props.textValueUpdate(addtext)
    } else {
      this.props.textValueUpdate(addtext.props.value)
    }
  }
  render() {
    return (
      <>
        <div className={`flex flex-wrap justify-center items-center h-28 w-auto`}>
          {SmileList.map((smile, j) => {
            return (
              <div key={j} className={`border-2 border-red-500 'w-9' h-8 text-sm font-semibold ${this.props.textColor} text-center p-1 hover:bg-blue-800`} onClick={() => { this.addText(j) }}>
                {smile}
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

export default Smile