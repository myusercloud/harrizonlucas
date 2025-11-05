import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from "path";
import projectRoutes from './routes/projectRoutes.js'
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config()

const app = express()

// ---------- MIDDLEWARE ----------
app.use(cors()) // allows frontend requests
app.use(express.json()) // parse JSON bodies

// ---------- ROUTES ----------
app.use('/api/projects', projectRoutes)

// Serve static files from the uploads folder
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Health check / root route
app.get('/', (req, res) => {
  res.status(200).json({ message: '✅ Portfolio API is running...' })
})

// ---------- ERROR HANDLER ----------
app.use((err, req, res, next) => {
  console.error('💥 Server Error:', err)
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
  })
})

// ---------- SERVER START ----------
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
