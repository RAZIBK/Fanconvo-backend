const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const swaggerDoc=require('swagger-ui-express')

const userRouter = require('./routes/userRouter/userRouter')
const dbConnection = require('./config/db/dbConnection')
const swaggerDocumation = require('./config/swagger/swaggerDocumation')


dotenv.config()
dbConnection()
const app=express()


app.use(express.json())


app.use(cors())


app.use('/documentation',swaggerDoc.serve);
app.use('/documentation',swaggerDoc.setup(swaggerDocumation));

app.use('/api/user',userRouter)

let port=process.env.PORT || 5000
app.listen(port,console.log("server started"))


