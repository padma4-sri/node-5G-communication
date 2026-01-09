const mongoose = require("mongoose");

const jobCardSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    deviceModel: {
      type: String,
      required: true,
    },
    issue: {
      type: String,
      required: true,
    },
    estimatedCost: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending",
    },
    deliveryDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("JobCard", jobCardSchema);
