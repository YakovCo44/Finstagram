import { useState, useRef, useEffect } from 'react'
import { demoPosts } from '../data/demoPosts'
import '../assets/styles/pages/Reels.scss'
import { AiOutlineHeart } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"
import { FiSend } from "react-icons/fi"
import { BsBookmark } from "react-icons/bs"

export function Reels() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const reelRefs = [useRef(null), useRef(null)]

  // Loop back to start/end if out of bounds
  function clampIdx(idx) {
    if (idx < 0) return demoPosts.length - 1
    if (idx >= demoPosts.length) return 0
    return idx
  }

  // Scroll handler: scrolls to next/prev reel on wheel/swipe
  useEffect(() => {
    const handleWheel = e => {
      if (e.deltaY > 40) setCurrentIdx(idx => clampIdx(idx + 1))
      if (e.deltaY < -40) setCurrentIdx(idx => clampIdx(idx - 1))
    }
    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [])

  // Scroll to the current reel on index change
  useEffect(() => {
    reelRefs[0].current?.scrollIntoView({ behavior: 'smooth' })
  }, [currentIdx])

  // Prepare current + next post indices (looping)
  const currentPost = demoPosts[currentIdx]
  const nextPost = demoPosts[clampIdx(currentIdx + 1)]

  return (
    <section className="reels-page">
      <div className="reels-feed">
        {[currentPost, nextPost].map((post, i) => (
          <div
            key={post.id}
            ref={reelRefs[i]}
            className="reel-wrapper"
            style={{ top: `${i * 100}vh` }}
          >
            <img src={post.imgUrl} alt={post.caption} className="reel-img" />
            <div className="reel-info">
              <span className="reel-user">@{post.user || 'demo_user'}</span>
              <span className="reel-caption">{post.caption}</span>
            </div>
          </div>
        ))}
        {/* Action buttons OUTSIDE the reel, on the right */}
        <div className="reel-actions-outer">
          <AiOutlineHeart size={32} />
          <FaRegComment size={29} />
          <FiSend size={29} />
          <BsBookmark size={27} />
        </div>
      </div>
    </section>
  )
}

