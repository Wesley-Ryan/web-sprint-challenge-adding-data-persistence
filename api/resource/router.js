const express = require("express");
const Helper = require("./resource-model");
const router = express.Router();

const validateResource = (req, res, next) => {
  const resource = req.body;

  if (!resource.name) {
    res.status(500).json({ message: "Missing required Fields." });
  } else {
    req.resource = resource;
    next();
  }
};

router.get("/", async (req, res) => {
  try {
    const resources = await Helper.getAll();
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ Message: error.Message });
  }
});
router.post("/", validateResource, async (req, res) => {
  try {
    Helper.create(req.resource);
    res.status(201).json(req.resource);
  } catch (error) {
    res.status(500).json({ Message: error.Message });
  }
});

module.exports = router;
