import '../assets/styles/pages/Explore.scss' // <-- Import the SCSS first
import { demoPosts } from '../data/demoPosts'

export function Explore() {
  return (
    <section className="explore-page">
      <div className="explore-grid">
        {demoPosts.map(post => (
          <div className="explore-grid-item" key={post.id}>
            <img src={post.imgUrl} alt={post.caption} />
          </div>
        ))}
      </div>
    </section>
  )
}


