const AuthController = require("../controllers/Auth.controller")
const AuthValidation = require("../validations/Auth.validation")
const Validation = require("../middlewares/Validation")

const router  = require("express").Router()

router.post("/register",AuthValidation.RegisterUser,Validation,AuthController.RegisterUser)

module.exports = router
