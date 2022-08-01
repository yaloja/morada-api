const express = require("express");
const router = express.Router();
const {
  create,
  getPropertiesByParams,
  getDetail,
  uploadImage,
} = require("./../controllers/propertiesCtrl");

router.post("/", create);
router.get("/", getPropertiesByParams);
router.get("/:id", getDetail);
router.post("/upload", uploadImage)

module.exports = router;