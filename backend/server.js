require("dotenv").config({

})
const { PUBLIC_DATA } = require("./constant");
const app = require("./src/app");
const { connectDB } = require("./src/config/db.config");
connectDB()



app.listen(PUBLIC_DATA,prompt,()=>{
    console.log('the app is listen at http://localhost:${PUBLIC-DATA.port}');
})
