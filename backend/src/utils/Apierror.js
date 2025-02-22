class ApiError extends Error{
    statuscode = 500
     constructor(statusCode,msg) {
         super(msg)
         this.message = msg
         this. statusCode = statusCode;
     }

}

module.exports =ApiError
