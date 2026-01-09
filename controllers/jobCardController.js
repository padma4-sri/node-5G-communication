const JobCard = require("../models/JobCard");

// CREATE
exports.createJobCard = async (req, res) => {
  try {
    const jobCard = await JobCard.create(req.body);
    res.status(201).json(jobCard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// READ ALL
exports.getAllJobCards = async (req, res) => {
  try {
    const jobCards = await JobCard.find().sort({ createdAt: -1 });
    res.status(200).json(jobCards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ONE
exports.getJobCardById = async (req, res) => {
  try {
    const jobCard = await JobCard.findById(req.params.id);
    if (!jobCard)
      return res.status(404).json({ message: "JobCard not found" });

    res.status(200).json(jobCard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updateJobCard = async (req, res) => {
  try {
    const jobCard = await JobCard.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!jobCard)
      return res.status(404).json({ message: "JobCard not found" });

    res.status(200).json(jobCard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE
exports.deleteJobCard = async (req, res) => {
  try {
    const jobCard = await JobCard.findByIdAndDelete(req.params.id);

    if (!jobCard)
      return res.status(404).json({ message: "JobCard not found" });

    res.status(200).json({ message: "JobCard deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
