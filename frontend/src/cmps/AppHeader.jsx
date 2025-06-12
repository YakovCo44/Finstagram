import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/user.actions'

import { AiOutlineHome, AiFillHome, AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { RiMessengerLine } from "react-icons/ri"
import { FiSearch, FiCompass, FiPlusSquare } from "react-icons/fi"
import { FaCompass } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import { BsInstagram } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"
import { MdOndemandVideo } from "react-icons/md"
import finstagramLogo from '../assets/img/finstagram-logo.png'
import finstagramIcon from '../assets/img/finstagram-icon.png'
import { useState } from 'react'
import { BsFillPlayBtnFill, BsPlay } from "react-icons/bs"
import { FiMessageCircle } from "react-icons/fi"
import { BsFillChatDotsFill } from "react-icons/bs"
import { useLocation } from "react-router-dom"

export function AppHeader({ isCollapsed, onSearchClick }) {
    const user = useSelector(storeState => storeState.userModule.user)
    const navigate = useNavigate()
    const location = useLocation()

    async function onLogout() {
        try {
            await logout()
            navigate('/')
            showSuccessMsg(`Bye now`)
        } catch (err) {
            showErrorMsg('Cannot logout')
        }
    }

    return (
         <aside className={`app-header${isCollapsed ? ' collapsed' : ''}`}>
            <div className="nav-inner">
                <Link to="/" className="logo" title="Finstagram">
                    {isCollapsed ? (
                        <img src={finstagramIcon} alt="Finstagram" height={32} />
                    ) : (
                        <img src={finstagramLogo} alt="Finstagram" height={32} />
                    )}
                </Link>
                <nav>
                    {/* Home */}
                    <NavLink to="/" end>
                        {({ isActive }) => (
                            <>
                            {isActive ? <AiFillHome size={24} /> : <AiOutlineHome size={24} />}
                            <span>Home</span>
                            </>
                        )}
                        </NavLink>

                        <NavLink
                        to="/search"
                        onClick={e => {
                            e.preventDefault()
                            if (isCollapsed) {
                            onSearchClick(false)
                            } else {
                            onSearchClick(true)
                            }
                        }}>
                        {({ isActive }) => (
                            <>
                            {isActive ? (
                                <span style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 32,
                                height: 32,
                                background: "#efefef",
                                borderRadius: "8px"
                                }}>
                                <FiSearch size={20} style={{ fontWeight: 700 }} />
                                </span>
                            ) : (
                                <FiSearch size={24} />
                            )}
                            {!isCollapsed && <span>Search</span>}
                            </>
                        )}
                        </NavLink>

                        <NavLink to="/explore">
                        {({ isActive }) => (
                            <>
                            {isActive ? <FaCompass size={24} /> : <FiCompass size={24} />}
                            <span>Explore</span>
                            </>
                        )}
                        </NavLink>

                        <NavLink to="/reels">
                        {({ isActive }) => (
                            <>
                            {isActive ? <BsFillPlayBtnFill size={24} /> : <BsPlay size={24} />}
                            <span>Reels</span>
                            </>
                        )}
                        </NavLink>

                        <NavLink to="/messages">
                        {({ isActive }) => (
                            <>
                            {isActive ? <BsFillChatDotsFill size={24} /> : <FiMessageCircle size={24} />}
                            <span>Messages</span>
                            </>
                        )}
                        </NavLink>

                        <NavLink to="/notifications">
                        {({ isActive }) => (
                            <>
                            {isActive ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
                            <span>Notifications</span>
                            </>
                        )}
                        </NavLink>

                        <NavLink to="/create">
                        <>
                            <FiPlusSquare size={24} />
                            <span>Create</span>
                        </>
                        </NavLink>

                    {/* Profile */}
                    <NavLink to={user ? `/user/${user._id}` : '/login'}>
                        {user?.imgUrl
                            ? <img src={user.imgUrl} alt={user.fullname} className="avatar" />
                            : <CgProfile size={24} />
                        }
                        <span>Profile</span>
                    </NavLink>
                </nav>
                {user && (
                    <button className="logout-btn" onClick={onLogout}>Logout</button>
                )}
            </div>
        </aside>
    )
}
