class ApiError extends Error{
     constructor(statusCode,msg) {
         super(msg)
     }

}

module.exports =ApiError
