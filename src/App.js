import './App.css';

import {Router, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';

import Login from './pages/Login'
import SignUp from './pages/SignUp'

import Main from './pages/Main';
import BricksCreate from './pages/BricksCreate'

import React from 'react';

import {createGlobalStyle} from 'styled-components';

// import TodoTemplate from "./components/TodoTemplate";
// import TodoHead from './components/TodoHead';
// import TodoList from './components/TodoList';
// import TodoCreate from './components/TodoCreate';

const GlobalStyle = createGlobalStyle`
    body {
        background: #e9ecef;
    }
`;

const HomePath = '/'
const LoginPath = '/login'
const SignUpPath = '/sign-up'
const MainPath = '/main'
const BricksCreatePath = '/post'


const App = () => {
    return (
        <>

                <Routes>
                    <Route path={HomePath} element={<Home/>}/>

                    <Route path={LoginPath} element={<Login/>}/>
                    <Route path={SignUpPath} element={<SignUp/>}/>

                    <Route path={MainPath} element={<Main/>}/>
                    <Route path={BricksCreatePath} element={<BricksCreate/>}/>

                </Routes>

        </>
    );
}


// function getTestData(){
//   axios.post('/testData', ['가', '나', '다'])
//       .then(function (res) {
//           console.log(res)
//       });
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <div>
//           <button onClick={ ()=> getTestData() }>조회</button>
//         </div>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
