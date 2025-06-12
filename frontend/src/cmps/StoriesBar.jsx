import { demoStories } from '../data/demoStories'
import {  useSelector } from "react-redux"
import { FaPlusCircle } from "react-icons/fa"


export function StoriesBar() {
    const user = useSelector(storeState => storeState.userModule.user)

    function handleAddStory() {
        alert('Open story upload modal (feature coming soon!)')
    }

    return (
        <div className="stories-bar">
            {/* Add Story - shows only if user is logged in */}
            {user && (
                <div className="story-avatar has-story add-story" title="Add Story" onClick={handleAddStory}>
                    <img src={user.imgUrl} alt="Your Story" />
                    <span className="plus-icon">
                        <FaPlusCircle size={22} color="#0af" style={{ background: "#fff", borderRadius: "50%" }} />
                    </span>
                    <div className="story-username">{user.fullname}</div>
                </div>
            )}

            {/* Show all demo stories except the current user */}
            {demoStories
                .filter(story => !user || story._id !== user._id)
                .map(story => (
                    <div
                        className={`story-avatar${story.hasStory ? ' has-story' : ''}`}
                        key={story._id}
                        title={story.fullname}
                        onClick={() => alert(`You clicked ${story.fullname}'s story!`)}
                    >
                        <img src={story.imgUrl} alt={story.fullname} />
                        <div className="story-username">{story.fullname}</div>
                    </div>
                ))}
        </div>
    )
}
