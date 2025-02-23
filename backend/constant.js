class PUBLIC_DATA{

    static port = process.env.PORT || 5000
    static mongo_uri = process.env.MONGO_URI || `mongodb://localhost/inventry`


}

module.exports = {
    PUBLIC_DATA
}