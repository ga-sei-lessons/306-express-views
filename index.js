// required packages
const express = require("express")

// app config
const app = express()
const PORT = 8080
// tell express to use ejs to render templates
app.set('view engine', 'ejs')

// define routes

// GET / -- home route for the blog
app.get('/', (req, res) => {
    // res.send('this is the homepage endpoint 👋')
    // res.sendFile(__dirname + '/views/index.html')
    // res.render('file to render', { key/value pairs of data to render on the template })
    res.render('index.ejs', {
        name: "Sterling Archer",
        age: 10,
        fruits: ['apple', 'orange', 'kiwi', 'pineapple']
    })
})

// res = {
//     ...,
//     render: function(filePath, object) {
//         // lookup the filePath template
//         // read in html using node filesystem
//         // use __dirname to figure out where the views folder is

//         for (key in object) {
//             ...renders html here
//         }
//     }
// }

// GET /about -- show an about me page
app.get('/about', (req, res) => {
    // res.send('this is the about page!')
    res.sendFile(__dirname + '/views/about.html')
})

// GET /blog -- a page of my blogs
app.get('/blog', (req, res) => {
    // res.send('this is a page of my blogs!')
    res.sendFile(__dirname + '/views/blog-directory.html')
})

// console.log(__dirname, __filename)

// listen on a port
app.listen(PORT, () => console.log(`express app fired up and listening on ${PORT} 🔥🚒`))