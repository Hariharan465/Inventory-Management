const { default: mongoose } = require("mongoose")

exports.connectDB = async()=>{
    try {
        await mangoose.connect(PUBLIC_DATA.mango_uri)
        console.log(`the app is connect with ${mongoose.connection.host}`);
    } catch (error) {
        mongoose.disconnect();
        process.exit(1);
    }    
}