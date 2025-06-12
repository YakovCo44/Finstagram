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

    const demoPosts = [
  // 1. Batman – Gotham at night
  {
    id: 1,
    username: "brucewayne",
    fullname: "Bruce Wayne",
    avatar: "https://i.pinimg.com/736x/c5/ed/25/c5ed2576f50df41c5465beb6879e7352.jpg",
    imgUrl: "https://plus.unsplash.com/premium_photo-1664392543043-91b0c3686c7b?q=80&w=1411&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // misty, dark landscape
    caption: "Another night, another Gotham. #IamBatman 🦇"
  },
  // 2. Wonder Woman – An island paradise (Themyscira vibes)
  {
    id: 2,
    username: "dianaprince",
    fullname: "Diana Prince",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbwMYceVIudagViF-0yBRhCu4RtOMaNKABEw&s",
    imgUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", // tropical island
    caption: "Training day at Themyscira. 💪🌊 #WonderWoman"
  },
  // 3. Joker – Something playful but eerie
  {
    id: 3,
    username: "jokergram",
    fullname: "The Joker",
    avatar: "https://upload.wikimedia.org/wikipedia/en/9/90/HeathJoker.png",
    imgUrl: "https://images.unsplash.com/photo-1631376030983-6d387244ce95?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // clown at a fair, slightly creepy
    caption: "Why so serious? 😏💚"
  },
  // 4. Superman – Above the clouds, sun, or flying
  {
    id: 4,
    username: "clarkkent",
    fullname: "Clark Kent",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_-wVchwZXUhJoAq-66Z-myzbkPuB1quvnQ&s",
    imgUrl: "https://images.unsplash.com/photo-1554413641-0812b9ff65ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // clouds, sky
    caption: "Up, up and away! Needed a break above the clouds. ☁️🦸‍♂️"
  },
  // 5. Catwoman – Black cat or city at night
  {
    id: 5,
    username: "selinakyle",
    fullname: "Selina Kyle",
    avatar: "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/10/The-Batman-Movie-Final-Trailer-catwoman-2.jpg",
    imgUrl: "https://plus.unsplash.com/premium_photo-1695803210560-3a6507cdf239?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // sleek black cat
    caption: "Cat naps & city lights. 😽🌃 #Catwoman"
  },
  // 6. Harley Quinn – Carnival, bright colors, fun chaos
  {
    id: 6,
    username: "harleyquinn",
    fullname: "Harley Quinn",
    avatar: "https://images.prismic.io/batman-escape/Zs9zaUaF0TcGJfRm_harley-quinn-suicide-squad.webp?auto=format,compress",
    imgUrl: "https://images.unsplash.com/photo-1718576131830-068280a68295?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // bright carnival/fair
    caption: "Puddin’ took me out for ice cream. Chaos & sprinkles! 🍦😜"
  },
  // 7. The Flash – Something fast/motion
  {
    id: 7,
    username: "barryallen",
    fullname: "Barry Allen",
    avatar: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-flash/1/1a/Barry_in_arrow.jpg",
    imgUrl: "https://images.unsplash.com/photo-1575206206230-f6308e1d9d60?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // motion blur lights
    caption: "Fastest selfie ever! ⚡📸 #TheFlash"
  },
  // 8. Bane – Gym, heavy weights, tough
  {
    id: 8,
    username: "baneofficial",
    fullname: "Bane",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiks0sZXtSI7MTE_TqiOWVJYZ5iE0WiPoA5A&s",
    imgUrl: "https://images.unsplash.com/photo-1590556409300-431697bafd4f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // strong man, gym
    caption: "Conquering my morning workout. You merely adopted the gym! 💪😤"
  },
  // 9. Penguin – Penguin (the animal) or something fancy
  {
    id: 9,
    username: "oswaldcobblepot",
    fullname: "Oswald Cobblepot",
    avatar: "https://upload.wikimedia.org/wikipedia/en/5/51/Oswald_Cobblepot_%28Robin_Lord_Taylor%29.jpg",
    imgUrl: "https://images.unsplash.com/photo-1617814087305-32154643f902?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // emperor penguins
    caption: "Waddling into the weekend in style. 🐧🎩"
  },
  // 10. Random user – Park, chill, neutral
  {
    id: 10,
    username: "naturelover",
    fullname: "Nature Lover",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    imgUrl: "https://images.unsplash.com/photo-1637036985430-794b0ea5511e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Enjoying my day at the park! 🌲"
  },
  // 11. Cool Cat – Cat with sunglasses
  {
    id: 11,
    username: "catdad",
    fullname: "Cool Cat",
    avatar: "https://randomuser.me/api/portraits/men/30.jpg",
    imgUrl: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&w=800&q=80",
    caption: "This is my first Finstagram post! 😺"
  }
]

     if (!user) {
        return <section className="home-page"><h2>Welcome to Finstagram!</h2><p>Please log in to see your feed.</p></section>
    }

    return (
        <section className="home-page">
            <StoriesBar />
            <main className="feed">
                {demoPosts.map(post => (
                    <div className="post-card" key={post.id}>
                    <div className="post-header">
                        <img src={post.avatar} className="avatar" alt={post.fullname} />
                        <span className="username">{post.fullname}</span>
                    </div>
                    <img src={post.imgUrl} className="post-image" alt="post"/>
                    <div className="post-actions">
                        <AiOutlineHeart size={24} style={{ cursor: 'pointer' }} />
                        <FaRegComment size={22} style={{ cursor: 'pointer' }} />
                        <FiSend size={22} style={{ cursor: 'pointer' }} />
                        <BsBookmark size={22} className="bookmark" style={{ cursor: 'pointer' }} />
                    </div>
                    <div className="post-footer">
                        <b>{post.fullname}</b> {post.caption}
                    </div>
                    </div>
                ))}
                </main>
        </section>
    )
}




