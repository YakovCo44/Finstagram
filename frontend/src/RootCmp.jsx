import React from 'react'
import { Routes, Route, Navigate } from 'react-router'

import { userService } from './services/user'
import { HomePage } from './pages/HomePage'
import { AboutUs, AboutTeam, AboutVision } from './pages/AboutUs'
import { AdminIndex } from './pages/AdminIndex.jsx'
import {  useState } from 'react'

import { UserDetails } from './pages/UserDetails'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { UserMsg } from './cmps/UserMsg.jsx'
import { LoginSignup } from './pages/LoginSignup.jsx'
import { Login } from './pages/Login.jsx'
import { Signup } from './pages/Signup.jsx'
import { SearchModal } from './cmps/SearchModal.jsx'
import { Explore } from './pages/Explore'
import { Reels } from './pages/Reels'
import { Create } from './pages/Create'


export function RootCmp() {

    const [ isSearchOpen, setIsSearchOpen ] = useState(false)
    
    return (
        <div className="main-container">
            <AppHeader isCollapsed={isSearchOpen} onSearchClick={setIsSearchOpen} />
                {isSearchOpen && (
                <>
                    <div className="search-modal__backdrop" onClick={() => setIsSearchOpen(false)} />
                    <SearchModal onClose={() => setIsSearchOpen(false)} />
                </>
                )}
            <UserMsg />

            <main>
                <Routes>
                    <Route path="" element={<HomePage />} />
                    <Route path="about" element={<AboutUs />}>
                        <Route path="team" element={<AboutTeam />} />
                        <Route path="vision" element={<AboutVision />} />
                    </Route>
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/reels" element={<Reels />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="user/:id" element={<UserDetails />} />
                    <Route path="admin" element={
                        <AuthGuard checkAdmin={true}>
                            <AdminIndex />
                        </AuthGuard>
                    } />
                    <Route path="login" element={<LoginSignup />}>
                        <Route index element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                    </Route>
                </Routes>
            </main>
            <AppFooter />
        </div>
    )
}




function AuthGuard({ children, checkAdmin = false }) {
    const user = userService.getLoggedinUser()
    const isNotAllowed = !user || (checkAdmin && !user.isAdmin)
    if (isNotAllowed) {
        console.log('Not Authenticated!')
        return <Navigate to="/" />
    }
    return children
}
