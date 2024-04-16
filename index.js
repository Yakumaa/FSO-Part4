const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const password = process.argv[2]

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

const mongoUrl =
  `mongodb+srv://maharjanshrish8:${password}@cluster0.nzvzua0.mongodb.net/blogApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(mongoUrl)

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})