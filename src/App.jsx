import './App.css'
import UserHomePage from './page/userHomePage'
import AddgrievancePage from './page/addgrievancePage'
import Profilepage from './page/profilepage'
import Userdashboard from './page/userdashboard.jsx'
import SettingsPage from './page/settingsPage.jsx'
import LoginPage from './page/loginPage'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from 'react-router'

function App() {
  const routes = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage props={{login:true}}/>
    },
    {
      path: "/signup",
      element: <LoginPage props={{login: false}}/>
    },
    {
      path: "/",
      element: <UserHomePage/>
    },
    {
      path:"/dashboard",
      element: <Userdashboard/>
    },
    {
      path: "/about",
      element: <div>hellllo</div>
    },
    {
      path: "/profile",
      element: <Profilepage/>
    },
    {
      path: "/addGrievance",
      element: <AddgrievancePage/>
    },
    {
      path: "/settings",
      element: <SettingsPage/>
    },
  ])

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
