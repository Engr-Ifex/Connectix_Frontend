import './App.css'
import { Route, Routes } from "react-router";
import Active from './Components/Proposal/Active/Active'
import ArchProposals from './Components/Proposal/ArchProposals/ArchProposals';
import Messages from './Components/Proposal/Messages/Messages';
import SignUp from './Components/Login_Home/SignUp/SignUp';
import Login from './Components/Login_Home/Login/Login.jsx';
import Home from './Components/Login_Home/Home/Home';
import Events from './Components/Login_Home/Events/Events';
import Create from './Components/Login_Home/Create/Create';
import Settings from './Components/Proposal/Settings/Settings';
import MainLogin from './Components/MainLogin/MainLogin';
import Favorites from './Components/Login_Home/Favorite/Favorites';

import Profile from './Components/Login_Home/Profile/Profile';
import { Settings, Premium, Logout, Change, Activities } from './Components/Login_Home/Profile';
import Details from './Components/Login_Home/Create/Detail';
import Landing from './Components/Login_Home/Landing/Landing.jsx';


function App() {

  return (
    <>
     <div>
        <Routes>
          <Route index element={<Landing />}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/SignUp' element={<SignUp/>}></Route>
          <Route path='/Create' element={<Create/>}></Route>
          <Route path='/Details' element={<Details/>}></Route>
          <Route path='/Events' element={<Events />}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Active' element={<Active/>}></Route>
          <Route path='/ArchiveProposals' element={<ArchProposals/>}></Route>
          <Route path='/settings' element={<Settings/>}></Route>
          <Route path='/Messages' element={<Messages/>}></Route>
          <Route path='/Profile' element={<Profile/>}></Route>
          <Route path="/Change" element={<Change />}></Route>
          <Route path="/Activities" element={<Activities />}></Route> {/* Corrected path */}
          <Route path="/Premium" element={<Premium />}></Route>
          <Route path="/Settings" element={<Settings />}></Route>
          <Route path="/Logout" element={<Logout />}></Route>

        </Routes>
     </div>
    </>
  )
}

export default App
