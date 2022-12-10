// import logo from './logo.svg';
import './App.css';
import { WelcomePage , LoginPage, EndPage } from './components';
import {BrowserRouter ,Route ,Routes} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState("");
  return (
    <div className="App flex justify-center items-center md:h-screen bg-gradient-to-r from-red-200 via-purple-200 to-indigo-200  ">
      <BrowserRouter className='bg-gradient-to-r from-[0xD5D0231] via-[0xD6C7347] to-[0xC2C0FE5] '>
        <Routes>
          <Route path="/" element={<WelcomePage/>}></Route>
          <Route path="/login" element={<LoginPage email={email} setEmail={setEmail}/>}></Route>
          <Route path="/finish" element={<EndPage email={email} setEmail={setEmail}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
