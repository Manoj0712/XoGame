import React from "react";
import { ImClock } from 'react-icons/im';

export default class DynamicPlayerGame extends React.Component {
     constructor() {
          super()
          this.state = {
               
               player: 'Player1',
               gameList: ['', '', '', '', '', '', '', '', ''],
               massage: '',
               playerList: ['', '', '', '', '', '', '', '', ''],
               winOrLose: ''
          }
     }
     statusChange(obj) {
          let xOrO = ''
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
          this.state.gameList.splice(obj, 1, xOrO)
          this.state.playerList.splice(obj, 1, this.state.player)
          this.setState({ playerList: [...this.state.playerList] })
          this.setState({ gameList: [...this.state.gameList] })
          var count = 0
          this.state.gameList.map((game) => {
               if (game) {
                    count++
               }
               return count
          })
          console.log(count)
          let game = this.state.gameList
          if (count >= 5) {
               if ((game[2] === game[4] && game[6]=== game[4] && game[2] === game[6] && game[2] && game[6] && game[4]) ||
                    (game[0] === game[3] && game[3] === game[6] && game[6] === game[0] && game[0] && game[6] && game[3]) ||
                    (game[0] === game[4] && game[4] === game[8] && game[0] === game[8] && game[8] && game[0] && game[4]) ||
                    (game[0] === game[1] && game[1] === game[2] && game[0] === game[2] && game[2] && game[0] && game[1]) ||
                    (game[3] === game[4] && game[4] === game[5] && game[5] === game[3] && game[3] && game[5] && game[4]) ||
                    (game[6] === game[7] && game[7] === game[8] && game[8] === game[6] && game[6] && game[8] && game[7]) ||
                    (game[1] === game[4] && game[4] === game[7] && game[1] === game[7] && game[7] && game[1] && game[4]) ||
                    (game[2] === game[5] && game[5] === game[8] && game[2] === game[8] && game[8] && game[2] && game[5])
               ) {
                    this.setState({ winOrLose: `${(this.state.player === "Player1") ? "Player1" : "Player2"} Win` })
               } else if (count === 9) {
                    this.setState({ winOrLose: `MATCH DRAW` })
               }
          }
     }
     reLoadingGame() {
          this.setState({ player: 'Player1' })
          this.setState({ gameList: ['', '', '', '', '', '', '', '', ''] })
          this.setState({ playerList: ['', '', '', '', '', '', '', '', ''] })
          this.setState({ winOrLose: '' })
     }
     render() {
          return (
               <>
                   { <div className="bg-slate-800 h-auto w-full text-white">
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
                              <div className={`flex flex-wrap justify-center items-center h-auto gap-8 pt-5 pb-5 bg-slate-600 sm:p-5 sm:w-72 ${this.state.winOrLose ? "pointer-events-none" : ""}`}>
                                   {this.state.gameList.map((xo, index) => {
                                        return (
                                             <div key={index} onClick={() => {
                                                  this.statusChange(index)
                                             }} className={`h-12 w-12 border-4 border-black rounded bg-white text-black font-extrabold text-center flex items-center justify-center text-2xl ${(this.state.playerList[index] === "Player1" && xo) ? "text-purple-500" : "text-yellow-500"}`}>
                                                  {xo}
                                             </div>)
                                   })}
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
                    </div>
                    }
               </>
          )
     }
}
