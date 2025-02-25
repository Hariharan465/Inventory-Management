const { UserModel, ProfileModel } = require("../models");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");

class AuthService {
    static async RegisterUser(body){
        const {email,password,name} = body

        const checkExist = await UserModel.findOne({email})
        if(!checkExist){
            throw new ApiError(httpStatus.BAD_REQUEST,"User Already Registered")
            return
        }

        const user = await UserModel.create({
            email,password,name
        })

        await ProfileModel.create({
            user:user._id
        })
        return{
            msg:"User Registered Successfully",
            token:''
        }
    }
}

module.exports = AuthService;
