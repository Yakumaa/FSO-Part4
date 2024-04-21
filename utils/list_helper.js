const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item
  }
  const blogsLikes = blogs.map(blogs => blogs.likes)

  return blogsLikes.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  const blogsLikes = blogs.map(blogs => blogs.likes)
	const largestIndex = blogsLikes.indexOf(Math.max(...blogsLikes))
	const largestinfo = blogs[largestIndex]

	return {
		title: largestinfo.title,
		author: largestinfo.author,
		likes: largestinfo.likes,
	}
}

const mostBlogs = (blogs) => {
  const authors = blogs.map(blogs => blogs.author)
  // console.log(authors)
  let authorCount = {}
  let maxAuthor = ''
  let maxCount = 0
  authors.forEach(author => {
    authorCount[author] = (authorCount[author] || 0) + 1
    if (authorCount[author] > maxCount) {
      maxAuthor = author
      maxCount = authorCount[author]
    }
  })
  // console.log(authorCount)
  // console.log(maxAuthor)
  // console.log(maxCount)
  return {
    author: maxAuthor,
    blogs: maxCount
  }
} 

const mostLikes = (blogs) => {
  let likesCounts = blogs.reduce((likesCount, blog) => {
    likesCount[blog.author] = (likesCount[blog.author] || 0) + blog.likes
    return likesCount
  }, {})
  let maxCount = Math.max(...Object.values(likesCounts))
  let mostLiked = Object.keys(likesCounts).filter(author => likesCounts[author] === maxCount)
  console.log(likesCounts)
  console.log(mostLiked)
  console.log(maxCount)
  return {
    author: mostLiked[0],
    likes: maxCount
  }
}

module.exports = {
  dummy,
  totalLikes, 
  favoriteBlog, 
  mostBlogs,
  mostLikes
}