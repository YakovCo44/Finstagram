export const demoPosts = [
  // 1. Batman
  {
    _id: 'p1',
    txt: "Another night, another Gotham. #IamBatman 🦇",
    imgUrl: "https://images.unsplash.com/photo-1567869974217-d3de4b5dd521?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    by: {
      _id: 'u1',
      username: "brucewayne",
      fullname: "Bruce Wayne",
      imgUrl: "https://i.pinimg.com/736x/c5/ed/25/c5ed2576f50df41c5465beb6879e7352.jpg",
    },
    comments: [
      {
        id: 'c1',
        by: {
          _id: 'u2',
          fullname: "Diana Prince",
          imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbwMYceVIudagViF-0yBRhCu4RtOMaNKABEw&s",
        },
        txt: "Stay safe out there, Dark Knight! 🌙",
      }
    ],
    likedBy: [
      {
        _id: 'u2',
        fullname: "Diana Prince",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbwMYceVIudagViF-0yBRhCu4RtOMaNKABEw&s",
      },
      {
        _id: 'u3',
        fullname: "Clark Kent",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_-wVchwZXUhJoAq-66Z-myzbkPuB1quvnQ&s",
      }
    ],
    tags: ['night', 'gotham'],
  },
  // 2. Wonder Woman
  {
    _id: 'p2',
    txt: "Training day at Themyscira. 💪🌊 #WonderWoman",
    imgUrl: "https://ew.com/thmb/3GYGbVEF7UDq3BqvFXMHS7WAMWg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/000253732hr-2000-b8975c28dc914d96b4b8a2da4193bc53.jpg",
    by: {
      _id: 'u2',
      username: "dianaprince",
      fullname: "Diana Prince",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbwMYceVIudagViF-0yBRhCu4RtOMaNKABEw&s",
    },
    comments: [
      {
        id: 'c2',
        by: {
          _id: 'u1',
          fullname: "Bruce Wayne",
          imgUrl: "https://i.pinimg.com/736x/c5/ed/25/c5ed2576f50df41c5465beb6879e7352.jpg",
        },
        txt: "Impressive form. Next time, spar with me?",
      }
    ],
    likedBy: [
      {
        _id: 'u1',
        fullname: "Bruce Wayne",
        imgUrl: "https://i.pinimg.com/736x/c5/ed/25/c5ed2576f50df41c5465beb6879e7352.jpg",
      },
      {
        _id: 'u3',
        fullname: "Clark Kent",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_-wVchwZXUhJoAq-66Z-myzbkPuB1quvnQ&s",
      }
    ],
    tags: ['themyscira', 'training', 'amazon'],
  },
  // 3. Joker
  {
    _id: 'p3',
    txt: "Why so serious? 😏💚",
    imgUrl: "https://images.unsplash.com/photo-1631376030983-6d387244ce95?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    by: {
      _id: 'u4',
      username: "jokergram",
      fullname: "The Joker",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/90/HeathJoker.png",
    },
    comments: [
      {
        id: 'c3',
        by: {
          _id: 'u6',
          fullname: "Harley Quinn",
          imgUrl: "https://images.prismic.io/batman-escape/Zs9zaUaF0TcGJfRm_harley-quinn-suicide-squad.webp?auto=format,compress",
        },
        txt: "Mr. J, you're hilarious! 😂",
      }
    ],
    likedBy: [
      {
        _id: 'u6',
        fullname: "Harley Quinn",
        imgUrl: "https://images.prismic.io/batman-escape/Zs9zaUaF0TcGJfRm_harley-quinn-suicide-squad.webp?auto=format,compress",
      }
    ],
    tags: ['chaos', 'smile'],
  },
  // 4. Superman
  {
    _id: 'p4',
    txt: "Up, up and away! Needed a break above the clouds. ☁️🦸‍♂️",
    imgUrl: "https://images.unsplash.com/photo-1554413641-0812b9ff65ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    by: {
      _id: 'u3',
      username: "clarkkent",
      fullname: "Clark Kent",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_-wVchwZXUhJoAq-66Z-myzbkPuB1quvnQ&s",
    },
    comments: [
      {
        id: 'c4',
        by: {
          _id: 'u2',
          fullname: "Diana Prince",
          imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbwMYceVIudagViF-0yBRhCu4RtOMaNKABEw&s",
        },
        txt: "Don't forget your cape, Smallville!",
      }
    ],
    likedBy: [
      {
        _id: 'u2',
        fullname: "Diana Prince",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbwMYceVIudagViF-0yBRhCu4RtOMaNKABEw&s",
      },
      {
        _id: 'u1',
        fullname: "Bruce Wayne",
        imgUrl: "https://i.pinimg.com/736x/c5/ed/25/c5ed2576f50df41c5465beb6879e7352.jpg",
      }
    ],
    tags: ['clouds', 'superman'],
  },
  // 5. Catwoman
  {
    _id: 'p5',
    txt: "Cat naps & city lights. 😽🌃 #Catwoman",
    imgUrl: "https://plus.unsplash.com/premium_photo-1695803210560-3a6507cdf239?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    by: {
      _id: 'u5',
      username: "selinakyle",
      fullname: "Selina Kyle",
      imgUrl: "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/10/The-Batman-Movie-Final-Trailer-catwoman-2.jpg",
    },
    comments: [
      {
        id: 'c5',
        by: {
          _id: 'u1',
          fullname: "Bruce Wayne",
          imgUrl: "https://i.pinimg.com/736x/c5/ed/25/c5ed2576f50df41c5465beb6879e7352.jpg",
        },
        txt: "Nice view. Watch out for the Bat-Signal!",
      }
    ],
    likedBy: [
      {
        _id: 'u1',
        fullname: "Bruce Wayne",
        imgUrl: "https://i.pinimg.com/736x/c5/ed/25/c5ed2576f50df41c5465beb6879e7352.jpg",
      }
    ],
    tags: ['cat', 'citylights'],
  },
  // 6. Harley Quinn
  {
    _id: 'p6',
    txt: "Puddin’ took me out for ice cream. Chaos & sprinkles! 🍦😜",
    imgUrl: "https://images.unsplash.com/photo-1718576131830-068280a68295?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    by: {
      _id: 'u6',
      username: "harleyquinn",
      fullname: "Harley Quinn",
      imgUrl: "https://images.prismic.io/batman-escape/Zs9zaUaF0TcGJfRm_harley-quinn-suicide-squad.webp?auto=format,compress",
    },
    comments: [
      {
        id: 'c6',
        by: {
          _id: 'u4',
          fullname: "The Joker",
          imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/90/HeathJoker.png",
        },
        txt: "Save me a scoop, Harl!",
      }
    ],
    likedBy: [
      {
        _id: 'u4',
        fullname: "The Joker",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/90/HeathJoker.png",
      }
    ],
    tags: ['carnival', 'chaos'],
  },
  // 7. The Flash
  {
    _id: 'p7',
    txt: "Fastest selfie ever! ⚡📸 #TheFlash",
    imgUrl: "https://images.unsplash.com/photo-1575206206230-f6308e1d9d60?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    by: {
      _id: 'u7',
      username: "barryallen",
      fullname: "Barry Allen",
      imgUrl: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-flash/1/1a/Barry_in_arrow.jpg",
    },
    comments: [
      {
        id: 'c7',
        by: {
          _id: 'u2',
          fullname: "Diana Prince",
          imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbwMYceVIudagViF-0yBRhCu4RtOMaNKABEw&s",
        },
        txt: "Can't even see you in the pic! 😂",
      }
    ],
    likedBy: [
      {
        _id: 'u2',
        fullname: "Diana Prince",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbwMYceVIudagViF-0yBRhCu4RtOMaNKABEw&s",
      }
    ],
    tags: ['speed', 'selfie'],
  },
  // 8. Bane
  {
    _id: 'p8',
    txt: "Conquering my morning workout. You merely adopted the gym! 💪😤",
    imgUrl: "https://images.unsplash.com/photo-1590556409300-431697bafd4f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    by: {
      _id: 'u8',
      username: "baneofficial",
      fullname: "Bane",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiks0sZXtSI7MTE_TqiOWVJYZ5iE0WiPoA5A&s",
    },
    comments: [
      {
        id: 'c8',
        by: {
          _id: 'u3',
          fullname: "Clark Kent",
          imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_-wVchwZXUhJoAq-66Z-myzbkPuB1quvnQ&s",
        },
        txt: "Careful you don't break the gym, Bane.",
      }
    ],
    likedBy: [
      {
        _id: 'u3',
        fullname: "Clark Kent",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_-wVchwZXUhJoAq-66Z-myzbkPuB1quvnQ&s",
      }
    ],
    tags: ['gym', 'strength'],
  },
  // 9. Penguin
  {
    _id: 'p9',
    txt: "Waddling into the weekend in style. 🐧🎩",
    imgUrl: "https://images.unsplash.com/photo-1617814087305-32154643f902?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    by: {
      _id: 'u9',
      username: "oswaldcobblepot",
      fullname: "Oswald Cobblepot",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/51/Oswald_Cobblepot_%28Robin_Lord_Taylor%29.jpg",
    },
    comments: [
      {
        id: 'c9',
        by: {
          _id: 'u5',
          fullname: "Selina Kyle",
          imgUrl: "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/10/The-Batman-Movie-Final-Trailer-catwoman-2.jpg",
        },
        txt: "Classy as always, Ozzy.",
      }
    ],
    likedBy: [
      {
        _id: 'u5',
        fullname: "Selina Kyle",
        imgUrl: "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/10/The-Batman-Movie-Final-Trailer-catwoman-2.jpg",
      }
    ],
    tags: ['penguin', 'fancy'],
  },
  // 10. Random User
  {
    _id: 'p10',
    txt: "Enjoying my day at the park! 🌲",
    imgUrl: "https://images.unsplash.com/photo-1637036985430-794b0ea5511e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    by: {
      _id: 'u10',
      username: "naturelover",
      fullname: "Nature Lover",
      imgUrl: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    comments: [
      {
        id: 'c10',
        by: {
          _id: 'u7',
          fullname: "Barry Allen",
          imgUrl: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-flash/1/1a/Barry_in_arrow.jpg",
        },
        txt: "Wish I could slow down and join you! 😅",
      }
    ],
    likedBy: [
      {
        _id: 'u7',
        fullname: "Barry Allen",
        imgUrl: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-flash/1/1a/Barry_in_arrow.jpg",
      }
    ],
    tags: ['park', 'chill'],
  },
  // 11. Cool Cat
  {
    _id: 'p11',
    txt: "This is my first Finstagram post! 😺",
    imgUrl: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&w=800&q=80",
    by: {
      _id: 'u11',
      username: "catdad",
      fullname: "Cool Cat",
      imgUrl: "https://randomuser.me/api/portraits/men/30.jpg",
    },
    comments: [
      {
        id: 'c11',
        by: {
          _id: 'u5',
          fullname: "Selina Kyle",
          imgUrl: "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/10/The-Batman-Movie-Final-Trailer-catwoman-2.jpg",
        },
        txt: "Meow-tastic post! 🐾",
      }
    ],
    likedBy: [
      {
        _id: 'u5',
        fullname: "Selina Kyle",
        imgUrl: "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/10/The-Batman-Movie-Final-Trailer-catwoman-2.jpg",
      }
    ],
    tags: ['cat', 'firstpost'],
  },
]
