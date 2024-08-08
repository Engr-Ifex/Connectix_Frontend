import './App.css'
import { Route, Routes } from "react-router";
import Active from './Components/Proposal/Active/Active'
import ArchProposals from './Components/Proposal/ArchProposals/ArchProposals';
import Messages from './Components/Proposal/Messages/Messages';
import SignUp from './Components/Login_Home/SignUp/SignUp';
import Login from './Components/Login_Home/Login/Login';
import Home from './Components/Login_Home/Home/Home';
import Events from './Components/Login_Home/Events/Events';

function App() {

  return (
    <>
     <div>
        <Routes>
          <Route path='/SignUp' element={<SignUp/>}></Route>
          <Route path='/Events' element={<Events />}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route index element={<Login />}></Route>
          <Route path='/Active' element={<Active/>}></Route>
          <Route path='/ArchiveProposals' element={<ArchProposals/>}></Route>
          <Route path='/Messages' element={<Messages/>}></Route>
        </Routes>
     </div>
    </>
  )
}

export default App
