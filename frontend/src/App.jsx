import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layoutes from './layoutes/Layoutes'
import Home from './pages/Home'
import SignUp from './pages/auth/SignUp'
import SignIn from './pages/auth/SignIn'
const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layoutes/>}>
        <Route index element={<Home/>}/>
      </Route>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/signIn' element={<SignIn/>}/>
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
