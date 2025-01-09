const mongoose = require("mongoose");

const FailedRequestSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  reason: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("FailedRequest", FailedRequestSchema);
