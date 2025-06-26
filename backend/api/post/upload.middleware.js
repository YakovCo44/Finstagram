import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../../uploads'))
  },
  filename: function (req, file, cb) {
    // Unique filename (timestamp-original.ext)
    const ext = path.extname(file.originalname)
    cb(null, Date.now() + '-' + file.originalname.replace(/\s/g, '_'))
  }
})

export const upload = multer({ storage })
