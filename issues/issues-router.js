const router = require("express").Router();
const restricted = require("../middlewares/restricted");
const validateIssueId = require("../middlewares/validateIssueId");

const db = require("./issues-model");

router.get("/", restricted, async (req, res, next) => {
  try {
    const issues = await db.find();
    console.log(issues);
    res.json(issues);
  } catch (err) {
    next(err);
  }
});

router.post("/", restricted, async (req, res, next) => {
  try {
    const newissue = await db.add(req.body);
    res.status(201).json(newissue);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", restricted, validateIssueId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await db.findById(id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", restricted, validateIssueId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const issue = await db.update(id, req.body);
    res.json(issue);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", restricted, validateIssueId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedCount = await db.remove(id);

    res.json({ removed: deletedCount });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
