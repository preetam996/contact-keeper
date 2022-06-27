const express = require("express")

const router = express.Router();

//@route POST /api/users
//@desc  Registar a useer
//@access public
router.post("/",(req,res)=>{
    res.send("Registared a user")
})

module.exports = router