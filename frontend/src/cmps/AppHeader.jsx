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
import { CreatePostModal } from '../cmps/CreatePostModal.jsx'
import { HomeIcon, SearchIcon, ExploreIcon, ReelsIcon, MessagesIcon, CreateIcon } from '../assets/icons/InstagramIcons.jsx'

export function AppHeader({ isCollapsed, onSearchClick }) {
    const user = useSelector(storeState => storeState.userModule.user)
    const navigate = useNavigate()
    const location = useLocation()
    const [isCreateOpen, setIsCreateOpen] = useState(false)

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
    <>
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
                  <HomeIcon active={isActive} />
                    <span className="sidebar-label">Home</span>
                </>
              )}
            </NavLink>

            {/* Search */}
            <NavLink to="/search">
            {({ isActive }) => (
                <>
                <SearchIcon active={isActive} />
                <span className="sidebar-label">Search</span>
                </>
            )}
            </NavLink>

            <NavLink to="/explore">
            {({ isActive }) => (
                <>
                <ExploreIcon active={isActive} />
                <span className="sidebar-label">Explore</span>
                </>
            )}
            </NavLink>

            <NavLink to="/reels">
            {({ isActive }) => (
                <>
                <ReelsIcon active={isActive} />
                <span className="sidebar-label">Reels</span>
                </>
            )}
            </NavLink>

            <NavLink to="/messages">
            {({ isActive }) => (
                <>
                <MessagesIcon active={isActive} />
                <span className="sidebar-label">Messages</span>
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
            <button
            className={`create-btn${isCreateOpen ? ' active' : ''}`}
            type="button"
            onClick={() => setIsCreateOpen(true)}
            >
            <CreateIcon active={isCreateOpen} />
            <span className="sidebar-label">Create</span>
            </button>

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

      {/* ---- RENDER MODAL IF OPEN ---- */}
      {isCreateOpen && <CreatePostModal onClose={() => setIsCreateOpen(false)} />}
    </>
  )
}

