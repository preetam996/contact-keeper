const express = require("express")

const router = express.Router();

//@route GET /api/contacts
//@desc  get all user contacts
//@access Private
router.get("/",(req,res)=>{
    res.send("Get all contact")
})



//@route POST /api/contacts
//@desc  add new contact
//@access Private
router.post("/",(req,res)=>{
    res.send("Add a new contact")
})




//@route PUT /api/contacts/:id
//@desc  update a contact
//@access Private
router.put("/:id",(req,res)=>{
    res.send("Updated the contact")
})


//@route DELETE /api/contacts/:id
//@desc  delete a contact
//@access Private
router.delete("/:id",(req,res)=>{
    res.send("Contact Deleted")
})
module.exports = router
