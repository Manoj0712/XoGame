import React from "react";
import { ImClock } from 'react-icons/im';
export default class Game extends React.Component {
     constructor() {
          super()
          this.state = {
               player: 'Player1',
               gameList: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
               massage: '',
               // playerList: ['', '', '', '', '', '', '', '', ''],
               winOrLose: ''
          }
     }
     statusChange(obj) {
          let xOrO = ''
          console.log("obj" + obj)
          if (this.state.player === 'Player1') {
               if (this.state.gameList[obj] === "X" || this.state.gameList[obj] === "O") {
                    return (this.setState({ massage: "This is Already Selected Please Choose Other" }))
               } else {
                    this.setState({ massage: "" })
                    this.setState({ player: "Player2" })
                    xOrO = "X";
               }
          } else if (this.state.player === "Player2") {
               if (this.state.gameList[obj] === "X" || this.state.gameList[obj] === "O") {
                    return (this.setState({ massage: "This is Already Selected Please Choose Other" }))
               } else {
                    this.setState({ massage: "" })
                    this.setState({ player: "Player1" })
                    xOrO = "O";
               }
          }
          console.log("list length" + this.state.gameList.length)
          this.state.gameList.splice(obj, 1, xOrO)
          console.log("list length" + this.state.gameList.length)
          // this.state.playerList.splice(obj, 1, this.state.player)
          // this.setState({ playerList: [...this.state.playerList] })
          this.setState({ gameList: [...this.state.gameList] })
          var count = 0
          this.state.gameList.map((game) => {
               if(game) {
                    count++
               }
               return count
          })
          var game = this.state.gameList
          let squareCount = Math.sqrt(game.length)
          let trueOrFalse = false
          var turnList = ["LeftToRight", "topToBottom", "rightToBottom", "leftToBottom"]
          for (var j = 0; j < turnList.length; j++) {
               var list = []
               var c = 0
               var countIncrease = 0
               for (var i = 0; i < game.length; i++) {
                    if (turnList[j] == "LeftToRight") {
                         list.push(game[i])
                    } else if (turnList[j] == "topToBottom") {
                         if (c == i) {
                              list.push(game[i])
                              c = c + squareCount
                         }
                    } else if (turnList[j] == "rightToBottom") {
                         list.push(game[i + squareCount - 1])
                         i = i + squareCount - 1
                         i--
                    } else if (turnList[j] == "leftToBottom") {
                         if (i == 0) {
                              list.push(game[i])
                         } else {
                              list.push(game[i + squareCount])
                              i = i + squareCount
                         }
                    }
                    if (list.length == squareCount) {
                         if ([...new Set(list)].length == 1 && [...new Set(list)][0] != '') {
                              trueOrFalse = true
                              j = turnList.length
                              break;
                         } else {
                              list = []
                              if (turnList[j] == "topToBottom") {
                                   countIncrease++
                                   c = countIncrease
                                   i = 0
                              }
                         }
                    }
               }
          }
          if (trueOrFalse == true) {
               this.setState({ winOrLose: `${(this.state.player === "Player1") ? "Player1" : "Player2"} Win` })
          } else if (count === game.length) {
               this.setState({ winOrLose: `MATCH DRAW` })
          }
     }
     reLoadingGame() {
          var emptyNumber = []
          var gameCountList = [...this.state.gameList]
          gameCountList.map((game) => {
               emptyNumber.push('')
          })
          this.setState({ player: 'Player1' })
          this.setState({ gameList: emptyNumber })
          this.setState({ winOrLose: '' })
     }
     render() {
          var counter = 0
     var matrixFormat= []
          for (var i = 0; i < Math.sqrt(this.state.gameList.length); i++) {
               var list1 = []
               for (var j = 0; j < Math.sqrt(this.state.gameList.length); j++) {
                    list1.push(<div key={j * 10} onClick={() => { this.statusChange(counter)}} className={`h-12 w-12 border-4 border-black rounded bg-white text-black font-extrabold text-center text-2xl ${(this.state.gameList[counter] === "X" && this.state.gameList[counter]) ? "text-purple-500" : "text-yellow-500"}`}>
                         {this.state.gameList[counter]}
                    </div>)
                    counter++
               }
               matrixFormat.push(list1)
          }
console.log(matrixFormat)
console.log(counter)
          return (
               <>
                    <div className="bg-slate-800 h-auto w-full text-white">
                         <div className='flex flex-col flex-warp justify-center items-center h-auto pb-10 mx-10 gap-10 sm:gap-5 relative'>
                              <div className="flex flex-col gap-5">
                                   <div className="pt-5">
                                        <h1 className="font-bold font-serif">Tic Tac Toe</h1>
                                   </div>
                                   <div>
                                        <div className="flex gap-10 text-center">
                                             <div className="border-2 bg-white  text-black">
                                                  <h1>VS</h1>
                                             </div>
                                             <div className="border-2">
                                                  <h1>BOT</h1>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="flex flex-wrap  bg-slate-600 gap-5">
                                   <div className="">
                                        <ImClock size={30} />
                                   </div>
                                   <div>
                                        <p className="text-left">Status</p>
                                        <h1 className="text-left font-bold"><b>{this.state.player}</b></h1>
                                   </div>
                              </div>
                              <div className="text-red-600"><h1>{this.state.massage}</h1></div>
                              <div className={`flex flex-warp flex-col h-auto w-auto gap-2 p-5 bg-slate-600 sm:p-5 ${this.state.winOrLose ? "pointer-events-none" : ""}`}>
                                   {
                                           matrixFormat.map((xo,index) => {
                                             return <div key={index} className="flex flex-row gap-2">
                                                  {xo}
                                                  {console.log(counter)}
                                             </div>

                                        })
                                   }
                              </div>
                              <div className={`absolute gap-4 top-[350px] sm:top-72 ${this.state.winOrLose ? "visible" : "hidden"} font-extrabold text-red-900 bg-white w-56 h-20 flex flex-col justify-center items-center`}>
                                   <div>
                                        {(this.state.winOrLose) ? this.state.winOrLose : ''}
                                   </div>
                                   <div>
                                        <button className="border-4 border-black bg-white text-black w-auto h-auto" onClick={() => {
                                             this.reLoadingGame()
                                        }}>New Game</button>
                                   </div>
                              </div>

                         </div>
                    </div >
               </>
          )
     }
}
