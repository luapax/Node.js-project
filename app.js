const express = require("express");
const path = require("path");
const app = express()
const port = process.env.PORT || 3000;
const zmienna = "podtytuł jako zmienna";


app.set("view engine", "hbs")
app.use('/assets', express.static(path.join(__dirname, "./assets")));
app.use('/js', express.static(path.join(__dirname, "./js")));
app.get('/', function (req, res) {
    res.render("index", {
        pageTitle: "tytuł strony",
        subTitle: zmienna,
    });
})

app.get('/Podstrona1', function (req, res) {
    res.send("Podstrona1");
})

app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`);
})