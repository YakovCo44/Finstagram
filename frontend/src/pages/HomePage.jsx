import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"
import { FiSend } from "react-icons/fi"
import { BsBookmark } from "react-icons/bs"
// import { demoPosts } from "../data/demoPosts" 
import { StoriesBar } from "../cmps/StoriesBar"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export function HomePage() {
    const user = useSelector(storeState => storeState.userModule.user)
    const [posts, setPosts] = useState([])

    useEffect(() => {
      axios.get('http://localhost:3030/api/post')
    .then(res => setPosts(res.data))
    .catch(err => console.error('Failed to fetch posts:', err))
    })

    const navigate = useNavigate()

     if (!user) {
        return <section className="home-page"><h2>Welcome to Finstagram!</h2><p>Please log in to see your feed.</p></section>
    }

    function handleLike(postId) {
      if (!user) return
      axios.post(`http://localhost:3030/api/post/${postId}/like`, { user })
        .then(res => {
          setPosts(posts => posts.map(post =>
            post._id === postId ? res.data : post
          ))
        })
        .catch(err => alert('Failed to like post'))
    }

    return (
        <section className="home-page">
            <StoriesBar />
           <main className="feed">
           {posts.map(post => (
            <div className="post-card" key={post._id}>
              {/* Post Header */}
              <div className="post-header">
                <img src={post.by.imgUrl} className="avatar" alt={post.by.fullname} />
                <span className="username">{post.by.fullname}</span>
              </div>
              {/* Post Image */}
              <img src={post.imgUrl} className="post-image" alt="post" />
              {/* Post Actions */}
              <div className="post-actions">
                {post.likedBy.some(liker => liker._id === user._id) ? (
                  <AiFillHeart
                    size={24}
                    style={{ cursor: 'pointer', color: 'red' }}
                    onClick={() => handleLike(post._id)}
                  />
                ) : (
                  <AiOutlineHeart
                    size={24}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleLike(post._id)}
                  />
                )}
                <FaRegComment size={22} style={{ cursor: 'pointer' }} />
                <FiSend size={22} style={{ cursor: 'pointer' }} />
                <BsBookmark size={22} className="bookmark" style={{ cursor: 'pointer' }} />
              </div>
              {/* Post Caption */}
              <div className="post-footer">
                <b>{post.by.fullname}</b> {post.txt}
              </div>
              {/* Comments Count */}
              {post.comments && post.comments.length > 0 && (
                <div
                  className="view-comments"
                  onClick={() => navigate(`/p/${post._id}`)}
                  style={{ cursor: "pointer" }}
                >
                  View all {post.comments.length} comments
                </div>
              )}
            </div>
          ))}
          </main>
        </section>
    )
}




