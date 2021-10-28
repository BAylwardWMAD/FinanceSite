const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

const publicDirPath = express.static(path.join(__dirname, '../public'));
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);

hbs.registerPartials(partialPath);

app.use(publicDirPath);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('', (req, res) => {
    res.render('index', {
        title: 'Home'
    });
});

app.get('/finances', (req, res) => {
    res.render('finances', {
        title: 'My finances'
    });
});

app.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login'
    });
});

app.get('/register', (req, res) => {
    res.render('register', {
        title: 'Register'
    });
});

app.get('/calculator', (req, res) => {
    res.render('calculator', {
        title: 'Income Tax Calculator'
    });
});

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}.`);
})