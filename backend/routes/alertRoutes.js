const express = require("express");
const { monitorRequest, fetchMetrics } = require("../controllers/alertController");

const router = express.Router();

router.post("/api/submit", monitorRequest);
router.get("/api/metrics", fetchMetrics);

module.exports = router;
