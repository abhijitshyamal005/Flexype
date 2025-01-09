const FailedRequest = require("../models/failedRequest");
const sendAlert = require("../services/emailService");

const ALERT_THRESHOLD = 5;
const TIME_WINDOW_MS = 10 * 60 * 1000;

const monitorRequest = async (req, res) => {
  const ip = req.ip;
  const token = req.headers["authorization"];

  if (!token || token !== process.env.VALID_TOKEN) {
    const reason = "Invalid Token or Headers";

    // Log failed request
    await FailedRequest.create({ ip, reason });

    // Check failed attempts
    const attempts = await FailedRequest.countDocuments({
      ip,
      timestamp: { $gte: new Date(Date.now() - TIME_WINDOW_MS) },
    });

    // Trigger alert if threshold exceeded
    if (attempts >= ALERT_THRESHOLD) {
      sendAlert(ip, attempts);
    }

    return res.status(401).json({ message: "Unauthorized" });
  }

  return res.status(200).json({ message: "Success" });
};

const fetchMetrics = async (req, res) => {
  const metrics = await FailedRequest.find().sort({ timestamp: -1 });
  res.json(metrics);
};

module.exports = { monitorRequest, fetchMetrics };
