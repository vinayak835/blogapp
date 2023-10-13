import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Signup from './pages/Signup'
import PostDetail from './pages/PostDetail'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Profile from './pages/Profile'
export default function App() {
  return (
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/sign-in' element={<SignIn/>}/>
    <Route path='/sign-up' element={<Signup/>}/>
    <Route path='/write' element={<CreatePost/>}/>
    <Route path='/edit/:id' element={<EditPost/>}/>
    <Route path='/profile/:id' element={<Profile/>}/>
    <Route path='/posts/post/:id' element={<PostDetail/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  )
}
