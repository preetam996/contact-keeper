const express = require("express")

const router = express.Router();

//@route GET /api/auth
//@desc  get user login
//@access Private
router.get("/",(req,res)=>{
    res.send("Get user logged in")
})


//@route POST /api/auth
//@desc  Auth user and get tocken
//@access Public
router.post("/",(req,res)=>{
    res.send("login user")
})
module.exports = router