const lodash = require('lodash')

const dummy = (blogs) => 1

const totalLikes = (array) => {
  const likesArray = array.map((blog) => blog.likes)
  const reducer = (sum, item) => sum + item
  return likesArray.reduce(reducer, 0)
}

const mostLikes = (array) => {
  if (array.length === 0) {
    return null
  }

  const blogWithMostLikes = array.reduce((compare, item) =>
    (compare.likes > item.likes ? compare : item), array[0])
  return {
    title: blogWithMostLikes.title,
    author: blogWithMostLikes.author,
    likes: blogWithMostLikes.likes,
  };
}

const mostBlogs = (array) => {
  if (array.length === 0) {
    return null
  }

  const authorBlogs = lodash.countBy(array, 'author')
  console.log(authorBlogs)

  const authorWithMostBlogs = lodash.maxBy(
    Object.keys(authorBlogs),
    (author) => authorBlogs[author],
  )
console.log('most blogs', authorWithMostBlogs)
  return {
    author: authorWithMostBlogs,
    blogs: authorBlogs[authorWithMostBlogs],
  }
}

module.exports = {
  dummy,
  totalLikes,
  mostLikes,
  mostBlogs,
}
