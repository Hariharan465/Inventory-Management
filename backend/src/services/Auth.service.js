const httpStatus = require("http-status")
const { UserModel,ProfileModel } = require("../models")
const ApiError = require("../utils/ApiError")
const { generatoken } = require("../utils/Token.utils")
const axios =  require("axios");

class AuthService{

    static async RegisterUser(body){
        const {email,password,name} = body

        const checkExist = await UserModel.findOne({email})
        if(!checklist){
            throw new ApiError(httpStatus.BAD_REQUEST,"user Already Registered")
            return

        }

        await UserModel.create({
            email,password,name

        })

        await profileModel.create({
            user:user._id
        })
        return{
            msg:"User Register Successfully",
            token:''
        }
    }
}

module.exports = AuthService;