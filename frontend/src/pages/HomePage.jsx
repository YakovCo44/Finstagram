import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { AiOutlineHeart } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"
import { FiSend } from "react-icons/fi"
import { BsBookmark } from "react-icons/bs"
import { demoPosts } from "../data/demoPosts" 
import { StoriesBar } from "../cmps/StoriesBar"

export function HomePage() {
    const user = useSelector(storeState => storeState.userModule.user)

     if (!user) {
        return <section className="home-page"><h2>Welcome to Finstagram!</h2><p>Please log in to see your feed.</p></section>
    }

    return (
        <section className="home-page">
            <StoriesBar />
           <main className="feed">
            {demoPosts.map(post => (
              <div className="post-card" key={post.id}>
                {/* Post Header */}
                <div className="post-header">
                  <img src={post.avatar} className="avatar" alt={post.fullname} />
                  <span className="username">{post.fullname}</span>
                </div>
                {/* Post Image */}
                <img src={post.imgUrl} className="post-image" alt="post" />
                {/* Post Actions */}
                <div className="post-actions">
                  <AiOutlineHeart size={24} style={{ cursor: 'pointer' }} />
                  <FaRegComment size={22} style={{ cursor: 'pointer' }} />
                  <FiSend size={22} style={{ cursor: 'pointer' }} />
                  <BsBookmark size={22} className="bookmark" style={{ cursor: 'pointer' }} />
                </div>
                {/* Likes */}
                {post.likeCount !== undefined && (
                  <div className="like-count">
                    {post.likeCount.toLocaleString()} likes
                  </div>
                )}
                {/* Post Caption */}
                <div className="post-footer">
                  <b>{post.fullname}</b> {post.caption}
                </div>
                {/* Comments Count */}
                {post.commentCount > 0 && (
                  <div className="view-comments">
                    View all {post.commentCount} comments
                  </div>
                )}
              </div>
            ))}
          </main>
        </section>
    )
}




