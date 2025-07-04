import { useState, useRef } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import '../assets/styles/cmps/CreatePostModal.scss'
import CreateImg from '../assets/img/Create.png'

export function CreatePostModal({ onClose }) {
  const user = useSelector(storeState => storeState.userModule.user)
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [caption, setCaption] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef(null)
  const [step, setStep] = useState(imagePreview ? 2 : 1)

  function handleFileChange(e) {
  const file = e.target.files[0]
  if (!file) return
  setImage(file)
  setImagePreview(URL.createObjectURL(file))
  setStep(2)
}

  function handleDrop(e) {
  e.preventDefault()
  const file = e.dataTransfer.files[0]
  if (!file) return
  setImage(file)
  setImagePreview(URL.createObjectURL(file))
  setStep(2)
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
        {/* Header */}
        <div className="modal-header">
          <span className="modal-title">Create new post</span>
          <button className="close-btn" onClick={onClose}>&times;</button>
          {step === 2 && (
            <button
              className="share-btn"
              onClick={handleSubmit}
              disabled={isUploading || !caption.trim()}
            >Share</button>
          )}
        </div>
        <div className="modal-line"></div>

        {/* Step 1: Upload image */}
        {step === 1 && (
          <div className="drop-step">
            <img src={CreateImg} alt="Upload" className="drop-img" />
            <span className="drop-label">Drag photos and videos here</span>
            <button className="select-btn" onClick={() => fileInputRef.current.click()}>
              Select from computer
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </div>
        )}

        {/* Step 2: Preview and caption */}
        {step === 2 && (
          <div className="post-preview-row">
            <div className="preview-img-col">
              <img src={imagePreview} alt="preview" className="image-preview" />
            </div>
            <div className="caption-col">
              <textarea
                className="status-textarea"
                placeholder="Write a caption..."
                value={caption}
                onChange={e => setCaption(e.target.value)}
                maxLength={2200}
                rows={8}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}