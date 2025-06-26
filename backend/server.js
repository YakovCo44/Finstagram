import http from 'http'
import path from 'path'
import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser'
import postRoutes from './api/post/post.routes.js'
import { authRoutes } from './api/auth/auth.routes.js'
import { userRoutes } from './api/user/user.routes.js'
import { setupSocketAPI } from './services/socket.service.js'

import { setupAsyncLocalStorage } from './middlewares/setupAls.middleware.js'



const app = express()
const server = http.createServer(app)

// Express App Config
app.use(cookieParser())
app.use(express.json())

// ---------- MOVE THIS BLOCK UP HERE! ----------
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve('public')))
} else {
    const corsOptions = {
        origin: [
            'http://127.0.0.1:3000',
            'http://localhost:3000',
            'http://127.0.0.1:5173',
            'http://localhost:5173',
            'http://127.0.0.1:5174',
            'http://localhost:5174'
        ],
        credentials: true
    }
    app.use(cors(corsOptions))
}
// ----------------------------------------------

// Register your API routes AFTER CORS is set up:
app.use('/api/post', postRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/uploads', express.static('uploads'))

// ...the rest stays the same...

app.all('/*all', setupAsyncLocalStorage)

setupSocketAPI(server)

app.get('/secret', (req, res) => {
    if (process.env.SECRET_STR) {
        res.send(process.env.SECRET_STR)
    } else {
        res.send('No secret string attached')
    }
})

// Serve index.html for all unhandled routes
app.get('/*all', (req, res) => {
    res.sendFile(path.resolve('public/index.html'))
})

import { logger } from './services/logger.service.js'
const port = process.env.PORT || 3030

server.listen(port, () => {
    logger.info('Server is running on: ' + `http://localhost:${port}/`)
})






