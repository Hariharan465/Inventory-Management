const ApiError = require(" ../utils/Apierror")

const ErrorHandling = (err, req, res, next) => {
    const obi ={}
    if(err instanceof ApiError){
                obj[ 'statusCode'] = err.statusCode
                obj['stack'] = err.stack
    }
    else{
        obj['statusCode'] = 400 
        obj['message'] = err.message
        obj['stack'] = err.stack
    }
    res.status(obj.statusCode).json(obj)

}   
module.exports = ErrorHandling 