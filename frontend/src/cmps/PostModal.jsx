import React, { useState, useEffect } from "react"
import axios from "axios"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import "../assets/styles/cmps/PostModal.scss"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"
import { FiSend } from "react-icons/fi"

export function PostModal() {
  const { postId } = useParams()
  const navigate = useNavigate()
  const user = useSelector(storeState => storeState.userModule.user)

  // --- State for the post and loading/error
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [newComment, setNewComment] = useState("")

  // --- Fetch the post from the backend!
  useEffect(() => {
    axios.get(`http://localhost:3030/api/post/${postId}`)
      .then(res => {
        setPost(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError("Post not found")
        setLoading(false)
      })
  }, [postId])

  // --- Keyboard shortcut for closing the modal
  useEffect(() => {
    const onEsc = e => { if (e.key === "Escape") navigate(-1) }
    window.addEventListener("keydown", onEsc)
    return () => window.removeEventListener("keydown", onEsc)
  }, [navigate])

  function handleBackdropClick(e) {
    if (e.target.classList.contains("post-modal__backdrop")) {
      navigate(-1)
    }
  }

  // --- Add comment, now always up-to-date from backend
  async function onAddComment(e) {
    e.preventDefault()
    if (!newComment.trim() || !user || !post) return

    const comment = {
      id: "c" + ((post.comments?.length || 0) + 1),
      by: {
        _id: user._id,
        fullname: user.fullname,
        imgUrl: user.imgUrl,
      },
      txt: newComment,
    }

    try {
      const res = await axios.post(
        `http://localhost:3030/api/post/${post._id}/comment`,
        { comment }
      )
      setPost(res.data) // <- Backend returns updated post
      setNewComment("")
    } catch (err) {
      alert('Failed to add comment')
      console.error(err)
    }
  }

  function handleLike() {
    if (!user || !post) return
    axios.post(`http://localhost:3030/api/post/${post._id}/like`, { user })
        .then(res => setPost(res.data))
        .catch(() => alert('Failed to like post'))
    }

  if (loading) return <div className="post-modal__backdrop"><div className="post-modal post-modal--loading">Loading...</div></div>
  if (error || !post) return <div className="post-modal__backdrop"><div className="post-modal post-modal--error">{error || "Post not found"}</div></div>

  return (
    <div className="post-modal__backdrop" onClick={handleBackdropClick}>
        <section className="post-modal">
        {/* Left: Image */}
        <div className="post-modal__img-section">
            <img src={post.imgUrl} alt="post" />
        </div>
        {/* Right: Comments */}
        <div className="post-modal__details">
            {/* Header */}
            <div className="post-modal__header">
            <img src={post.by.imgUrl} alt={post.by.fullname} className="avatar" />
            <span className="username">{post.by.fullname}</span>
            </div>
            <div className="post-modal__comments-area">
            {/* Original post (caption) */}
            <div className="post-modal__comment">
                <img src={post.by.imgUrl} alt={post.by.fullname} className="avatar" />
                <div>
                <span className="username">{post.by.fullname}</span>
                <span>{post.txt}</span>
                </div>
            </div>
            {/* Comments */}
            {post.comments?.map(comment => (
                <div className="post-modal__comment" key={comment.id}>
                <img src={comment.by.imgUrl} alt={comment.by.fullname} className="avatar" />
                <div>
                    <span className="username">{comment.by.fullname}</span>
                    <span>{comment.txt}</span>
                </div>
                </div>
            ))}
            </div>
            {/* Actions (bottom, like/comment field) */}
            <div className="post-modal__actions">
            {/* Icon actions row */}
            <div className="post-modal__actions-row">
                {post.likedBy?.some(liker => liker._id === user?._id) ? (
                <AiFillHeart
                    size={28}
                    style={{ cursor: 'pointer', color: 'red' }}
                    onClick={handleLike}
                />
                ) : (
                <AiOutlineHeart
                    size={28}
                    style={{ cursor: 'pointer' }}
                    onClick={handleLike}
                />
                )}
                <FaRegComment size={25} style={{ cursor: 'pointer' }} />
                <FiSend size={25} style={{ cursor: 'pointer' }} />
            </div>
            <span className="like-count">{post.likedBy?.length || 0} likes</span>
            <form className="add-comment-form" onSubmit={onAddComment}>
                <input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                />
                <button type="submit" disabled={!newComment.trim()}>Post</button>
            </form>
            </div>
        </div>
        </section>
    </div>
    )
}
