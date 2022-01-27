import React from 'react'
import '../App.css'
import { Route, NavLink, HashRouter, Routes } from 'react-router-dom'
import Home from './Home'
import Stuff from './Stuff'
import Contact from './Contact'
import Loading from './Loading'

export default function Main() {
    return (
       
     
        <HashRouter>
            <div>
                <h1>Simple SPA & API calls</h1>
                <br/>
                <ul className='header'>
                    <li><NavLink  to='/Home'>Home</NavLink></li>
                    <li ><NavLink to='/stuff'>Stuff</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
                <div className='content'>
                    <Routes>

                        <Route  path="/Home" element={<Home/>} />
                        <Route path='/stuff' element={<Stuff/>} />
                        <Route path='/contact' element={<Contact/>} />

                    </Routes>
                </div>
            </div>
        </HashRouter>
     
        
    )
}


