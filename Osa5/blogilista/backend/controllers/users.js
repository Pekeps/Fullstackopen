const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

require('express-async-errors')

usersRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('blogs')
  response.json(users)
})

usersRouter.post('/', async (request, response) => {
  const { username, name, password } = request.body
  if (password.length < 3) {
    response.status(400).json({ error: 'Password must be at least 3 characters' })
  }
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    name,
    passwordHash,
  })
  
  const result = await user.save()
  response.status(201).json(result)
  
})

module.exports = usersRouter
