// import logo from './logo.svg';
import './App.css';
import XoGamePlay from './xogame/xoGamePlay.js';
// import KeyBoard from './virtualKeyBoard/keyBoard.js';
// import './virtualKeyBoard/configuration';
// import  ReactReduce  from './reactHooks/reactReduce';
// import Game from './xogame/game'
function App() {
  return (
    <div className="App">
      <div>
        <XoGamePlay playerOptionList={["One Player", "Two Player"]}/>
      </div>
      {/* <div>
        <KeyBoard />
      </div> */}
      {/* <div>
      <ReactReduce/> 
      </div> */}
      {/* <div>
        <Game/> 
      </div> */}
    </div>
  );
}
export default App;
