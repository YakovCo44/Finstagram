import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { loadUser } from '../store/user.actions'
import { store } from '../store/store'
import { showSuccessMsg } from '../services/event-bus.service'
import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from '../services/socket.service'

export function UserDetails() {

    const params = useParams()
    const user = useSelector(storeState => storeState.userModule.watchedUser)

    useEffect(() => {
        loadUser(params.id)

        socketService.emit(SOCKET_EMIT_USER_WATCH, params.id)
        socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

        return () => {
            socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
        }

    }, [params.id])

    function onUserUpdate(user) {
        showSuccessMsg(`This user ${user.fullname} just got updated from socket, new score: ${user.score}`)
        store.dispatch({ type: 'SET_WATCHED_USER', user })
    }

    return (
        <main className="user-details">
            <h1>User Details</h1>
            {user &&
                <section className="profile-page">
                    <div className="profile-header">
                        <img className="profile-avatar" src={user.imgUrl} alt={user.fullname} />
                        <div className="profile-info">
                            <h2 className="profile-username">{user.username}</h2>
                            <div className="profile-stats">
                                <span><b>{user.posts?.length || 0}</b> posts</span>
                                <span><b>{user.followers?.length || 0}</b> followers</span>
                                <span><b>{user.following?.length || 0}</b> following</span>
                            </div>
                            {/* {user.bio && <div className="profile-bio">{user.bio}</div>} */}
                        </div>
                    </div>
                    <div className="profile-posts-grid">
                        {/* TODO: Map user.posts to post thumbnails, Instagram style */}
                        <p>User’s posts will show here</p>
                    </div>
                </section>
            }
        </main>
    )
}