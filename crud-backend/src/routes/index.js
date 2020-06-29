const router = require('express').Router()

router.get("/create-category",(req,res)=>{
    return res.send('Welcome')
})

module.exports = router