import { useState, useRef } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import '../assets/styles/cmps/CreatePostModal.scss'

export function CreatePostModal({ onClose }) {
  const user = useSelector(storeState => storeState.userModule.user)
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [caption, setCaption] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef(null)

  function handleFileChange(e) {
    const file = e.target.files[0]
    if (!file) return
    setImage(file)
    setImagePreview(URL.createObjectURL(file))
  }

  function handleDrop(e) {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (!file) return
    setImage(file)
    setImagePreview(URL.createObjectURL(file))
  }

  function handleDragOver(e) {
    e.preventDefault()
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!image || !caption.trim() || !user) return

    setIsUploading(true)
    const formData = new FormData()
    formData.append('img', image)
    formData.append('txt', caption)
    formData.append('by', JSON.stringify({
      _id: user._id,
      fullname: user.fullname,
      imgUrl: user.imgUrl
    }))

    try {
      await axios.post('http://localhost:3030/api/post', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      setIsUploading(false)
      onClose()
      window.location.reload() // Optionally, refresh to show new post in feed
    } catch (err) {
      setIsUploading(false)
      alert('Upload failed')
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="create-post-modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Create new post</h2>
        {!imagePreview ? (
          <div
            className="drop-area"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => fileInputRef.current.click()}
          >
            <p>Drag & drop an image here, or click to select</p>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </div>
        ) : (
          <form className="caption-form" onSubmit={handleSubmit}>
            <img src={imagePreview} alt="preview" className="image-preview" />
            <textarea
              placeholder="Write a caption..."
              value={caption}
              onChange={e => setCaption(e.target.value)}
              maxLength={2200}
            />
            <button type="submit" disabled={isUploading || !caption.trim()}>
              {isUploading ? 'Posting...' : 'Post'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
