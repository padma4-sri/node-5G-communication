const mongoose = require("mongoose");

const jobCardSchema = new mongoose.Schema(
  {
    // ======================
    // Customer Information
    // ======================
    customerName: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    altPhoneNumber: {
      type: String,
    },
    salutation: {
      type: String,
      enum: ["MR.", "MRS.", "MS.", ""],
      default: "",
    },
    address: {
      type: String,
    },

    // ======================
    // Device Information
    // ======================
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    pattern: {
      type: String,
    },
    color: {
      type: String,
    },
    imei: {
      type: String,
    },
    noImei: {
      type: Boolean,
      default: false,
    },
    cantReadImei: {
      type: Boolean,
      default: false,
    },
    deviceNotReceived: {
      type: Boolean,
      default: false,
    },

    // ======================
    // Device Status When Received
    // ======================
    powerOn: {
      type: String,
      enum: ["Power On", "No Power On", ""],
      default: "",
    },
    touch: {
      type: String,
      enum: ["Working", "Not Working", "Can't Check", ""],
      default: "",
    },
    display: {
      type: String,
      enum: ["Working", "Not Working", "Can't Check", ""],
      default: "",
    },
    camera: {
      type: String,
      enum: ["Working", "Not Working", "Can't Check", ""],
      default: "",
    },
    deviceCondition: {
      type: String,
      required: true,
    },

    // ======================
    // Complaints
    // ======================
    complaint: {
      type: String,
      required: true,
    },
    remarks: {
      type: String,
    },

    // ======================
    // Data Backup
    // ======================
    backup: {
      type: String,
      enum: ["No Need", "Important", ""],
      default: "",
    },

    // ======================
    // Payment
    // ======================
    estimatedAmount: {
      type: Number,
      required: true,
    },
    advanceAmount: {
      type: Number,
      default: 0,
    },
    confirmAmount: {
      type: Boolean,
      default: false,
    },

    // ======================
    // Others
    // ======================
    expectedDelivery: {
      type: Date,
    },
    preparedBy: {
      type: String,
    },
    technician: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Completed", "Delivered"],
      default: "Pending",
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

module.exports = mongoose.model("JobCard", jobCardSchema);
