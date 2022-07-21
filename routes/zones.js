const express = require("express");
const router = express.Router();
const {
    create,
    getAll,
    getDetail,
    getCityZones
} = require("./../controllers/zonesCtrl");

router.post("/", create);
router.get("/", getAll);
router.get("/:id", getDetail);
router.get("/cityZones/:id", getCityZones);

module.exports = router;