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
import Settings1 from './Components/Proposal/Settings/Settings';
import MainLogin from './Components/MainLogin/MainLogin';
import Favorites from './Components/Login_Home/Favorite/Favorites';
import Activities from './Components/Profile/Activities/Activities'
import BuyCoin from './Components/Profile/BuyCoin/BuyCoin';
import ProfileSettings from './Components/Profile/Settings/Settings'
import Payment from './Components/Profile/Payment/Payment';
import ChangePassword from './Components/Profile/ChangePassword/ChangePassword';
import MyProfile from './Components/Profile/ViewProfile/MyProfile';
import Profile from './Components/Profile/Profile/Profile';
import { UsernameProvider } from './Components/Usernameprovider'
import ShowHome from './Components/ShowpromoterHome/ShowHome';
import ShowFavorites from './Components/ShowPromoterdetails/ShowEvents/ShowEvents';
import { RegistrationProvider } from './Components/contexts/Formcontext'
import AccountType from  "./Components/ShowPromoterdetails/AccountType/Accounttype"
import Landing from './Components/Login_Home/Landing/Landing'

function App() {

  return (
    <>
     <div>
     <RegistrationProvider>
     <UsernameProvider>
        <Routes>
          <Route index element={<Landing />}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/SignUp' element={<SignUp/>}></Route>
          <Route path='/Create' element={<Create/>}></Route>
          {/* <Route path='/Details' element={<Details/>}></Route> */}
          <Route path='/Events' element={<Events />}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Active' element={<Active/>}></Route>
          <Route path='/ArchiveProposals' element={<ArchProposals/>}></Route>
          <Route path='/settings' element={<Settings1/>}></Route>
          <Route path='/Messages' element={<Messages/>}></Route>
          <Route path='/mainlogin' element={<MainLogin/>}></Route>
          <Route path='/favorites' element={<Favorites/>}></Route>
          <Route path='/showfavorites' element={<ShowFavorites/>}></Route>
          <Route path='/showevents' element={<ShowFavorites/>}></Route>
          <Route path='/activities' element={<Activities/>}></Route>
          <Route path='/buycoin' element={<BuyCoin/>}></Route>
          <Route path='/payment' element={<Payment/>}></Route>
          <Route path='/showhome' element={<ShowHome/>}></Route>
          <Route path='/profilesettings' element={<ProfileSettings/>}></Route>
          <Route path='/Profile' element={<Profile/>}></Route>
          <Route path='/MyProfile' element={<MyProfile/>}></Route>
          <Route path='/ChangePassword' element={<ChangePassword/>}></Route>  
          <Route path='/accounttype' element={<AccountType/>}></Route>          
        



        </Routes>
        </UsernameProvider>
        </RegistrationProvider>

     </div>
    </>
  )
}

export default App
