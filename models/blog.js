const mongoose = require('mongoose')

const password = process.argv[2]
// const Blog = mongoose.model('Blog', blogSchema)

const mongoUrl =
  `mongodb+srv://maharjanshrish8:${password}@cluster0.nzvzua0.mongodb.net/blogApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(mongoUrl)

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Blog', blogSchema)