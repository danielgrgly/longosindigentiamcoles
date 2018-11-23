const passport = require('passport')
const { Router } = require('express')
const { catchAsyncErrors } = require('../utils')
const users = require('./users')
const articles = require('./articles')

const publicRouter = new Router()
// use the private router for protected endpoints
const privateRouter = new Router()
privateRouter.use(passport.authenticate('jwt', { session: false }))

// user endpoints
publicRouter.post('/user/register', catchAsyncErrors(users.register))
publicRouter.post('/user/login', catchAsyncErrors(users.login))
publicRouter.get('/user/all', catchAsyncErrors(users.all))
privateRouter.put('/user/me', catchAsyncErrors(users.update))
privateRouter.delete('/user/delete/:id', catchAsyncErrors(users.delete))

// article endpoints
privateRouter.post('/article/create', catchAsyncErrors(articles.create))
publicRouter.get('/article/get', catchAsyncErrors(articles.getAll))
publicRouter.get('/article/get:id', catchAsyncErrors(articles.getById))
privateRouter.delete('/article/delete/:id', catchAsyncErrors(articles.delete))

module.exports = {
  public: publicRouter,
  private: privateRouter
}
