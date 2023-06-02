import React from "react";
import Smile from './smile.js';
import Number from './number.js';
import ABCD from './abcd.js';

export default class keyBoard extends React.Component {
     constructor() {
          super()
          this.state = {
               abcdShow: false,
               smileShow: false,
               numberShow: false,
               lineBreak: false,
               textValue: '',
          }
     }
     textTrackList = () => {
          this.setState({ abcdShow: true })
     }
     textValueUpdate = (obj) => {
          console.log(obj)
          if (obj === "remove") {
               this.setState({ textValue: this.state.textValue.slice(0, this.state.textValue.length - 1) })
          } else if (obj === 'smile') {
               this.setState({ smileShow: true, numberShow: false, abcdShow: false })
          } else if (obj === '123') {
               this.setState({ numberShow: true, smileShow: false, abcdShow: false })
          } else if (obj === 'abc') {
               this.setState({ numberShow: false, smileShow: false, abcdShow: true })
          } else if (obj === "newLine") {
               this.setState({ textValue: this.state.textValue + "\n" })
          } else if (obj == '') {
               this.setState({ textValue: this.state.textValue + obj })
          } else {
               this.setState({ textValue: this.state.textValue + obj })
          }
     }
     render() {
          let keyboardValue;
          if (this.state.abcdShow == true) {
               keyboardValue = <ABCD textValueUpdate={this.textValueUpdate} />
          } else if (this.state.smileShow == true) {
               keyboardValue = <Smile textValueUpdate={this.textValueUpdate} />
          } else if (this.state.numberShow == true) {
               keyboardValue = <Number textValueUpdate={this.textValueUpdate} />
          }
          return (
               <>
                    <div className="flex flex-col h-screen w-full bg-green-600 justify-between items-center flex-wrap">
                         <div className="flex flex-wrap flex-col justify-center pt-5">
                              <div>
                                   <textarea type="text" placeholder="Enter Any" className={`border-2 border-black ${(this.state.lineBreak == true) ? "" : ""} h-10 max-h-20 cursor-auto pointer-events-auto

`} onFocus={() => {
                                             this.textTrackList()
                                        }} defaultValue={this.state.textValue} >
                                   </textarea>
                              </div>
                              <p className="bg-red-400">{this.state.textValue}</p>
                         </div>
                         <div className={`flex flex-wrap flex-col justify-center  items-center bg-red-500`}>
                              {keyboardValue}
                         </div>
                    </div>
               </>
          )
     }
}