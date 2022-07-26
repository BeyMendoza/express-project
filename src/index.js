
const express = require('express');
const appconfigs = require('./configs/index');
const indexRouter = require("./routes")

const app = express();


app.use('/static', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');





app.use('/', indexRouter)





app.listen(appconfigs.SERVER_PORT, () => {
    console.log(`Running at http://localhost:${appconfigs.SERVER_PORT}`);
})





