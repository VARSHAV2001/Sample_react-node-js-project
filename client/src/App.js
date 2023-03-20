import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CabDetails from './pages/cab-details';
import HomePages from './pages/Homepage';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Registration from './pages/Register'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "/homepage",
    element: <HomePages/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Registration/>
  },
  {
    path: "/cabdetails",
    element: <CabDetails/>
  }

])
function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;


