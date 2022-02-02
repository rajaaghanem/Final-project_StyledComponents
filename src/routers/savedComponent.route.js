const express = require("express");
const SavedComponent = require("../models/savedComponent");
const router = express.Router();
const auth = require("../middleware/auth");

//Add new saved component
router.post("/api/savedcomponents", auth, async (req, res) => {
  // const savedComponent = new SavedComponent(req.body);
  const savedComponent = new SavedComponent({
    ...req.body,
    owner: req.user._id,
  });

  try {
    await savedComponent.save();
    res.status(201).send(savedComponent);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//Get all saved components of the logged in user
router.get("/api/savedcomponents", auth, async (req, res) => {
  try {
    // const savedComponent = await SavedComponent.find({owner: req.user._id});
    // res.send(savedComponent);

    await req.user.populate("savedComponents");
    res.send(req.user.savedComponents);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

//Get all global components by category
router.get("/api/savedcomponents/globalbycategory", async (req, res) => {
  const { category } = req.body;

  console.log(category);
  try {
    const savedComponent = await SavedComponent.find({
      global: true,
      category: category,
    });

    if (!savedComponent) {
      return res.status(404).send("Saved Component not found");
    }

    res.send(savedComponent);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//Get savedComponent by id
router.get("/api/savedcomponents/:id", auth, async (req, res) => {
  const _id = req.params.id;

  try {
    const savedComponent = await SavedComponent.findOne({
      _id,
      owner: req.user._id,
    });

    if (!savedComponent) {
      return res.status(404).send("Saved Component not found");
    }

    res.send(savedComponent);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//Update a saved copmonent fields
router.patch("/api/savedcomponents/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "name",
    "styledComponent",
    "jsComponent",
    "cssComponent",
    "global",
    "category",
  ];

  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "invalid updates" });
  }

  try {
    const savedComponent = await SavedComponent.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!savedComponent)
      return res.status(404).send("Saved component not found");

    updates.forEach((update) => {
      savedComponent[update] = req.body[update];
    });

    await savedComponent.save();
    res.send(savedComponent);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

//Delete a specific component
router.delete("/api/savedComponents/:id", auth, async (req, res) => {
  const _id = req.params.id;

  try {
    const savedComponent = await SavedComponent.findOneAndDelete({
      _id: _id,
      owner: req.user._id,
    });

    if (!savedComponent) {
      res.status(404).send("saved Component not found");
    }

    res.send(savedComponent);
  } catch (e) {
    res.status(500).send();
  }
});

//Delete user profile 
router.delete("/api/savedcomponents/me", auth, async (req, res) => {
  try {
    await req.user.remove();
    res.send(req.user);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
