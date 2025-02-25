class PUBLIC_DATA {
  static port = process.env.PORT || 5000;
  static mongo_uri = process.env.MONGO_URI || `mongodb://localhost:27017/inventory`;
} 
module.exports = {
    PUBLIC_DATA
}