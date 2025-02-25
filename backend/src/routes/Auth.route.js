const AuthValidation = require("../validations/Auth.validation")
const Validation = require("../middlewares/Validation")
const AuthController = require("../controllers/Auth.controler")

const router = require("express").Router()

router.post("/register",AuthValidation.RegisterUser,Validation,AuthController.RegisterUser)

module.exports = router