const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv"); 
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const courseRoute = require("./routes/course");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");


dotenv.config();
mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connected Succefully!")).catch((err) => {
    console.log(err);
});
app.use(express.json());
app.use("/api/auth", authRoute) ;
app.use("/api/users", userRoute) ;
app.use("/api/courses", courseRoute) ;
app.use("/api/carts", cartRoute) ;
app.use("/api/orders", orderRoute) ;



app.listen(process.env.PORT || 3000 , () => {
    console.log("Backend server is running!");
  });




  
  