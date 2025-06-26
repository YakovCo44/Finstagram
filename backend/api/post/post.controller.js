import { postService } from './post.service.js'

// Get all posts
export async function getPosts(req, res) {
  const posts = await postService.query()
  res.json(posts)
}

// Get post by ID
export async function getPostById(req, res) {
  const post = await postService.getById(req.params.id)
  res.json(post)
}

// Add a new post
export async function addPost(req, res) {
  let imgUrl = ''
  if (req.file) {
    imgUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
  }
  const { txt, by } = req.body
  let byObj = by
  if (typeof by === 'string') byObj = JSON.parse(by)

  const post = {
    imgUrl,
    txt,
    by: byObj,
    createdAt: Date.now(),
    comments: [],
    likedBy: [],
  }

  const savedPost = await postService.add(post)
  res.json(savedPost)
}

// Add a comment to a post
export async function addCommentToPost(req, res) {
  const { id } = req.params
  const { comment } = req.body
  const post = await postService.addComment(id, comment)
  res.json(post)
}

//Like or unlike a post
export async function toggleLikeOnPost(req, res) {
  const { id } = req.params
  const { user } = req.body 
  const post = await postService.toggleLike(id, user)
  res.json(post)
}


