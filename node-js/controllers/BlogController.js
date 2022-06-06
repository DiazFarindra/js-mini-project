const Blog = require('../models/blog')

const index = async (req, res) => {
    const data = await Blog.find().sort({ createdAt: -1 })

    res.render('index', {
        title: 'homepage',
        blogs: data
    })
}

const create = (req, res) => {
    res.render('create', {
        title: 'create',
    })
}

const store = async (req, res) => {
    const data = await new Blog(req.body)

    try {
        data.save()
        res.redirect('/blogs')
    } catch (err) {
        console.log(err)
    }
}

const show = async (req, res) => {
    const id = req.params.id
    const data = await Blog.findById(id)

    res.render('details', {
        title: 'details',
        blog: data
    })
}

const edit = async (req, res) => {
    const id = req.params.id
    const data = await Blog.findById(id)

    res.render('edit', {
        title: 'edit',
        blog: data
    })
}

const update = async (req, res) => {
    const id = req.params.id

    try {
        await Blog.findByIdAndUpdate(id, req.body)
        res.json({ redirect: '/blogs' })
    } catch (err) {
        console.log(err)
    }
}

const destroy = async (req, res) => {
    const id = req.params.id

    try {
        await Blog.findByIdAndDelete(id)
        res.json({ redirect: '/blogs' })
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    index, create, store, show, edit, update, destroy
}