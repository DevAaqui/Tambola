const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
var cors = require('cors')

const app = express()
dotenv.config({ path: './.env'});

//Models
const User = require('./model/userModel')
const Ticket = require('./model/ticketModel')

const bodyParser = require('body-parser')

const sequelize = require('./util/database')

app.use(cors({
    origin: '*'
}));

const userRoutes = require('./routes/user')

const ticketRoutes = require('./routes/ticketR')

app.use(bodyParser.json({extended: false}))

app.use(express.static(path.join(__dirname, 'public')))

app.use(userRoutes)
app.use(ticketRoutes)

User.hasOne(Ticket)
Ticket.belongsTo(User)

sequelize .sync()
//.sync({force: true})
.then(result => {
    app.listen(process.env.PORT || 3000)
})
.catch(err=> console.log(err))

