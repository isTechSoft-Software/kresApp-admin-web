
import { Route, Routes } from 'react-router-dom'
import LeftSection from './AdminPage/sections/LeftSection/LeftSections'
import AdminPanelDashboard from './AdminPage/pages/Dashboard/AdminPanelDashboard'
import { colors } from './AdminPage/color'
import Sms from './AdminPage/pages/Notifications/Sms'
import Mail from './AdminPage/pages/Notifications/Mail'
import Notif from './AdminPage/pages/Notifications/Notif'
import Schools from './AdminPage/pages/Schools/showSchools/Schools'
import CreateSchool from './AdminPage/pages/Schools/createSchool/CreateSchool'
import Users from './AdminPage/pages/Users/Users'
import Packet from './AdminPage/pages/Packets/Packet'
import CreatePacket from './AdminPage/pages/Packets/CreatePacket'
import "./AdminPage/admin.css"
import DetailsSchool from './AdminPage/pages/Schools/SchoolDetails/DetailsSchool'
import LoginPage from './AdminPage/pages/LoginPage/LoginPage'
import { useSelector } from 'react-redux'
import Profile from './AdminPage/pages/Profile/Profile'
import Classes from './AdminPage/pages/Classes/Classes'

function App() {
  const {login} = useSelector(state => state.login);

  return (
    <div>
      <div className="minh100" style={{ backgroundColor: colors.background.default }}>
        <div className="row" style={{ backgroundColor: colors.background.default }}>
          {login && <div  className='col-2'><LeftSection /></div>}
          <div className={login ? 'col-10' : 'col-12'}> {/* LeftSection'u gösterme durumuna göre sınıfı değiştir */}
            <Routes>
              <Route path="/anasayfa" element={!login ? <LoginPage/> :<AdminPanelDashboard />}></Route>
              <Route path="/duyuru/sms" element={!login ? <LoginPage/> :<Sms />}></Route>
              <Route path="/duyuru/mail" element={!login ? <LoginPage/> :<Mail />}></Route>
              <Route path="/duyuru/bildirim" element={!login ? <LoginPage/> :<Notif />}></Route>
              <Route path="/okullar" element={!login ? <LoginPage/> :<Schools />}></Route>
              <Route path="/kullanicilar" element={!login ? <LoginPage/> :<Users />}></Route>
              <Route path="/paketler" element={!login ? <LoginPage/> :<Packet />}></Route>
              <Route path="/paketler/olustur" element={!login ? <LoginPage/> :<CreatePacket />}></Route>
              <Route path="/okullar/olustur" element={!login ? <LoginPage/> :<CreateSchool />}></Route>
              <Route path="/okullar/:id" element={!login ? <LoginPage/> :<DetailsSchool />}></Route>
              <Route path="/profile/:role/:id" element={!login ? <LoginPage/> :<Profile />}></Route> 
              <Route path="/siniflar/:id" element={!login ? <LoginPage/> :<Classes />}></Route> 
              <Route path="/" element={<LoginPage />}></Route>


            </Routes>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
