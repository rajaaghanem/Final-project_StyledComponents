const express = require("express");
const User = require("../models/User");
const router = express.Router();
const auth = require("../middleware/auth");

//Signup new user
router.post("/api/users/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//Login user
router.post("/api/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send("Unable to login");
  }
});

//Logout user
router.post("/api/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send("Unable to logout");
  }
});

//Logout from all user's devices
router.post("/api/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();

    res.send();
  } catch (e) {
    res.status(500).send("Unable to logout");
  }
});

//Get logged in user profile
router.get("/api/users/me", auth, async (req, res) => {
  res.send(req.user);
});

//Update logged in user profile
router.patch("/api/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  const _id = req.params.id;
  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.send(req.user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//Delete logged in user profile
router.delete("/api/users/me", auth, async (req, res) => {
  try {

    await req.user.remove();
    res.send(req.user);

  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
