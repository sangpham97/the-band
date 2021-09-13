const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const exampleRoute = require('./router/examples')
const userRoute = require('./router/users')
const cateRoute = require('./router/categories')
const postRoute = require('./router/posts')
const multer = require('multer')
const path = require('path')

dotenv.config()
app.use('/images', express.static(path.join(__dirname, '/images')))

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connection Successfull'))
  .catch((err) => {
    console.error(err)
  })

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images')
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  },
})

const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded')
})

app.use(express.json())

app.use('/api/examples', exampleRoute)
app.use('/api/users', userRoute)
app.use('/api/categories', cateRoute)
app.use('/api/posts', postRoute)

app.listen(8800, () => {
  console.log('Backend server is running')
})
