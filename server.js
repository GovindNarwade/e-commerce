const express = require('express')
const app = express()
const swaggerUI =require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc');
const env = require("dotenv")
env.config({path:"./config/.env"})
const cors =require("cors")
const db = require("./config/db")
const user = require("./routes/user_routes")
const userForgot = require("./routes/forgotPassword_routes")
const Product = require("./routes/product_routes")
const AddToCart = require("./routes/addtocart_routes")
const rating = require("./routes/rating_routes")
const review = require("./routes/Review_routes")
const order = require("./routes/order_routes")
const category = require("./routes/Category_routes")
db()
app.use(express.json())
app.use(express.static('public'));
app.use(cors())

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Lafyuu API",
        version: "1.0.0",
        description: "A simple  Lafyuu API",
       
      },
  
      servers: [
        {
          url: "http://localhost:2000/",
          description: "Lafyuu Documentation",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
  
  const specs = swaggerJsDoc(options);
  app.use("/api-docs-lafyuu", swaggerUI.serve, swaggerUI.setup(specs));
 
  
app.use('/api/v1',user)
app.use('/api/v1',userForgot)
app.use('/api/v1',Product)
app.use('/api/v1',AddToCart)
app.use('/api/v1',rating)
app.use('/api/v1',review)
app.use('/api/v1',order)
app.use('/api/v1',category)

app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT || 4000}`))

