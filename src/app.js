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

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}.`);
})