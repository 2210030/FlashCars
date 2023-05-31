const express = require("express");
const router = express.Router();
const User = require("../models/userModel")


router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (user) {
      if (user.isBlocked) {
        return res.status(403).json({ error: "BlockedUser" });
      }
      res.send(user);
    } else {
      return res.status(400).json({ error: "Invalid username or password." });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
});


router.post("/register", async(req, res) => {

    

    try {
        const newuser = new User(req.body)
        await newuser.save()
        res.send('User registered successfully')
    } catch (error) {
      return res.status(400).json(error);
    }

});

router.post("/check-email", async(req, res) => {

    const {email} = req.body;
    console.log('email -=----> ', email)

    try {
        const user = await User.findOne({username:email})
        if(user){
            res.send(user)
        } else {
            res.send(false)
        }
    } catch (error) {
      return res.status(400).json(error);
    }

});

router.post("/reset-password", async(req, res) => {

    const {username,password} = req.body;
    console.log('email -=----> ', req.body)

    try {
        const user = await User.findOneAndUpdate({username},{$set:{password:password}})
        user.save();
        res.send(user);
    } catch (error) {
      return res.status(400).json(error);
    }

});

router.post("/block-user", async (req, res) => {
    const { userId } = req.body;
  
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        { isBlocked: true },
        { new: true }
      );
      res.send(user);
    } catch (error) {
      return res.status(400).json({ error: "Failed to block user." });
    }
  });
  
  router.post("/unblock-user", async (req, res) => {
    const { userId } = req.body;
  
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        { isBlocked: false },
        { new: true }
      );
      res.send(user);
    } catch (error) {
      return res.status(400).json({ error: "Failed to unblock user." });
    }
  });
  
  
  
  
  router.get("/", async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      return res.status(400).json(error);
    }
  });

module.exports = router

