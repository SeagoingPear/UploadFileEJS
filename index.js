const express = require('express')
const app = express()
const path = require('path')

const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage: storage})

app.set('view engine', 'ejs')

app.get('/upload', (req, res) => {
    res.render('upload')
})

app.post('/upload', upload.single('image'), (req, res) => {
    res.send('Image uploaded')
})

app.listen(3001, () => {console.log('Server running in: \033[36mhttps://localhost:3001/\033[m')})