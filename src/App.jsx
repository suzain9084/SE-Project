import { useState } from 'react'
import './App.css'
import GrievanceCard from './components/grievanceCard'
import Navbar from './components/navbar'
import NewGrievanceForm from './components/newgrievanceform'
import AuthForm from './page/loginPage'
import Header from './components/header'
import Grienvancelist from './components/grienvancelist'
import UserHomePage from './page/userHomePage'
import AddgrievancePage from './page/addgrievancePage'
import Profile from './components/profilecompt'
import Profilepage from './page/profilepage'
import Dashboard from './components/dashboard.jsx'
import Userdashboard from './page/userdashboard.jsx'
import Tempo from './components/tempo.jsx'
import SettingsPage from './page/settingsPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar/> 
       <GrievanceCard/>
      <NewGrievanceForm/>
      <AuthForm/> */}
      {/* <DashboardComponent/> */}
      {/* <Header/> */}
      {/* <Grienvancelist/> */}
      {/* <UserHomePage/> */}
      {/* <AddgrievancePage/> */}
      {/* <Profilepage/> */}
      {/* <Dashboard/> */}
      {/* <Userdashboard/> */}
      {/* <Tempo/> */}
      <SettingsPage/>
    </>
  )
}

export default App
