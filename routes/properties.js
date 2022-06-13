const express = require("express");
const router = express.Router();
const {
  create,
  getAll,
  getDetail,
} = require("./../controllers/propertiesCtrl");

router.post("/", create);
router.get("/", getAll);
router.get("/:id", getDetail);

module.exports = router;