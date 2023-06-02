import React, { Component } from 'react'
import Game from './game.js'
import DynamicPlayerGame from './dynamicPlayerGame.js'

export default class xoGamePlay extends Component {
     constructor(props) {
          super(props)
          this.state = {
               playerOption: props.playerOptionList,
               player1: false,
               player2: false,
               rowsAndClounm:3
          }
     }
     gameChange = (e) => {
          console.log(e.target.value)
          if (e.target.value === "One Player") {
               this.setState({ player1: true })
          } else if (e.target.value === "Two Player") {
               this.setState({ player2: true })
          }
     }
     render() {
          let playerList
          if (this.state.player1 == true) {
               playerList = <DynamicPlayerGame />
          } else if (this.state.player2 == true) {
               playerList = <Game />
          } else {

          }
          return (
               <>
                    {playerList ? playerList : <div className="flex items-center justify-center gap-4 flex-col h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                         <div className="pt-5 ">
                              <h1 className="font-bold font-serif">Tic Tac Toe</h1>
                         </div>
                         <div>
                              <select className='w-42' onChange={this.gameChange}>
                                   <option>Please Select Player</option>
                                   {this.state.playerOption.map((option, i) => {
                                        return <option key={i} value={option}>{option}</option>
                                   })
                                   }
                              </select>
                         </div>
                         <div className='pt-5'>
                              <h1 className='font-bold font-serif'>Number Of Rows And Columns</h1>
                              <input type="number" placeholder='Number of Rows And Cloumn' min="3" max="10" defalutvalue={this.state.rowsAndClounm}></input>
                         </div>
                    </div>
                    }
               </>
          )
     }
}
