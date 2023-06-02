import React, { Component } from 'react';
import { CiMicrophoneOn } from 'react-icons/ci';
import { TbArrowBigUp, TbArrowBigUpLine, TbArrowBigUpLines } from 'react-icons/tb';
import { BiSmile } from 'react-icons/bi';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { FiDelete } from 'react-icons/fi';

export default class abcd extends Component {
     constructor() {
          super()
          this.state = {
               textColorChange: "text-white",
               abcdList: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", <TbArrowBigUpLine size={25} value="highUpperCase" />, "Z", "X", "C", "V", "B", "N", "M", <FiDelete size={22} value="remove" />],
               newLineList: [" ", " ", <CiMicrophoneOn size={20} value="mick" />, " ", " ", " ", " ", " ", ",!?", " ", "123", <BiSmile size={20} value="smile" />, " ", " ", " ", " ", " ", " ", " ", <BsArrowReturnLeft size={20} value="newLine" />, " ", " ", ",", " ", " ", " ", " ", " ", ".", " "]
          }
     }
     sentanceUpdate = (id) => {
          let textName = this.state.abcdList[id]
          if (typeof (textName) == 'string') {
               this.props.textValueUpdate(textName)
               if (this.state.abcdList[19].props.value === "highUpperCase") {
                    this.setState({ abcdList: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", <TbArrowBigUp size={25} value="upperCase" />, "z", "x", "c", "v", "b", "n", "m", <FiDelete size={22} value="remove" />] })
               }
          } else if (textName.props.value === 'remove') {
               this.props.textValueUpdate(textName.props.value)
          } else if (textName.props.value === "upperCase") {
               this.setState({ abcdList: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", <TbArrowBigUpLine size={25} value="highUpperCase" />, "Z", "X", "C", "V", "B", "N", "M", <FiDelete size={22} value="remove" />] })
          } else if (textName.props.value === "highUpperCase") {
               this.setState({ abcdList: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", <TbArrowBigUpLines size={25} value="lowerCase" />, "Z", "X", "C", "V", "B", "N", "M", <FiDelete size={22} value="remove" />] })
          } else if (textName.props.value === "lowerCase") {
               this.setState({ abcdList: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", <TbArrowBigUp size={25} value="upperCase" />, "z", "x", "c", "v", "b", "n", "m", <FiDelete size={22} value="remove" />] })
          }
     }
     textToNumber = (val) => {
          let newLine = this.state.newLineList[val]
          console.log(newLine)
          if (newLine === '123') {
               this.props.textValueUpdate(newLine)
          } else if (typeof (newLine) === 'string') {
               this.props.textValueUpdate(newLine)
          } else if (newLine.props.value === 'smile') {
               this.props.textValueUpdate(newLine.props.value)
          } else if (newLine.props.value === 'newLine') {
               console.log(newLine.props.value)
               this.props.textValueUpdate(newLine.props.value)
          }
     }
     render() {
          return (
               <>
                    <div className={`flex flex-wrap justify-center items-center h-28 w-auto`}>
                         {this.state.abcdList.map((abcd, index) => {
                              return (
                                   <div key={index} className={`border-2 border-red-500 ${(typeof (abcd) === 'string') ? 'w-8' : 'w-9'} h-8 text-sm font-semibold border-black ${this.state.textColorChange} text-center p-1 hover:bg-blue-800`} onClick={() => { this.sentanceUpdate(index) }}>
                                        {abcd}
                                   </div>
                              )
                         })}
                    </div>
                    <div className={`flex flex-wrap justify-center h-14 items-center w-auto`}>
                         {this.state.newLineList.map((list, i) => {
                              return (
                                   <div key={i} className={`text-xs h-5 w-8 ${this.state.textColorChange}  ${(list == " ") ? "  " : ""} text-center`} onClick={() => { this.textToNumber(i) }}>
                                        {list}
                                   </div>
                              )
                         })}
                    </div>
               </>
          )
     }
}
