const AuthController = require("../controllers/Auth.controller")

const router  = require("express").Router()

router.post("/register",AuthValidation.RegisterUser,,validation,AuthController.RegisterUser)
module.exports = router
