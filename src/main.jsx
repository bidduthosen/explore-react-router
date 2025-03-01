import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './components/Main/Main.jsx'
import About from './components/About/About.jsx'
import Contract from './components/Contract/Contract.jsx'
import Home from './components/Home/Home.jsx'
import User from './components/User/User.jsx'
import Prouduct from './components/Product/Prouduct.jsx'
import Phone from './components/Phone/Phone.jsx'
import UserDetails from './components/UserDetails/UserDetails.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>,
        children:[
          {
            path: '/about',
            element:<Prouduct></Prouduct>
          },
          {
            path: '/about/phone',
            element:<Phone></Phone>
          }
        ]
      },
      {
        path:'/contract',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Contract></Contract>
      },
      {
        path: '/contract/:userId',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
