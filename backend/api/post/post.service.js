import { dbService } from '../../services/db.service.js'
import { ObjectId } from 'mongodb'

async function query() {
  const collection = await dbService.getCollection('post')
  return await collection.find().toArray()
}

async function getById(postId) {
  const collection = await dbService.getCollection('post')
  let criteria
  if (/^[a-f\d]{24}$/i.test(postId)) {
    criteria = { _id: new ObjectId(postId) }
  } else {
    criteria = { _id: postId }
  }
  return await collection.findOne(criteria)
}

async function add(post) {
  const collection = await dbService.getCollection('post')
  post.comments = post.comments || []
  post.likedBy = post.likedBy || []
  await collection.insertOne(post)
  return post
}

async function addComment(postId, comment) {
  const collection = await dbService.getCollection('post')
  let criteria
  if (/^[a-f\d]{24}$/i.test(postId)) {
    criteria = { _id: new ObjectId(postId) }
  } else {
    criteria = { _id: postId }
  }
  await collection.updateOne(
    criteria,
    { $push: { comments: comment } }
  )
  return getById(postId)
}

async function toggleLike(postId, user) {
  const collection = await dbService.getCollection('post')
  let criteria
  if (/^[a-f\d]{24}$/i.test(postId)) {
    criteria = { _id: new ObjectId(postId) }
  } else {
    criteria = { _id: postId }
  }

  // Check if user already liked the post
  const post = await collection.findOne(criteria)
  const alreadyLiked = post.likedBy.some(liker => liker._id === user._id)

  let update
  if (alreadyLiked) {
    update = { $pull: { likedBy: { _id: user._id } } }
  } else {
    update = { $push: { likedBy: user } }
  }
  await collection.updateOne(criteria, update)
  return getById(postId)
}

export const postService = {
  query,
  getById,
  add,
  addComment,
  toggleLike
}
