const router = require("express").Router();

const routes= []



routes.forEach((cur)=>{
    router.use(cur.path,cur.route)
})

module.exports = router