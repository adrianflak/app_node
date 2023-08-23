const app = require("./app")
const port = process.env.PORT || 3000

app.listen(port ,() =>
    console.log("Aplikacja działa na porcie 3000")
);