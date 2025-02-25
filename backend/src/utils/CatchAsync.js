const CatchAsync = (fn)=>(req,res,next)=>{
    return Promise.resolve(fn(req,res,next)).catch((e)=>{
        console.log("promise can be broken");
        next(e)
    })
}

module.exports = CatchAsync