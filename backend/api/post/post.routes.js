import express from 'express'
import { getPosts, getPostById, addPost, addCommentToPost, toggleLikeOnPost } from './post.controller.js'
import { upload } from './upload.middleware.js'

const router = express.Router()

// Get all posts
router.get('/', getPosts)

// Get single post by ID
router.get('/:id', getPostById)

// Add a new post
router.post('/', upload.single('img'), addPost)

// Add a comment to a post
router.post('/:id/comment', addCommentToPost)

//like or unlike a post
router.post('/:id/like', toggleLikeOnPost)

export default router

