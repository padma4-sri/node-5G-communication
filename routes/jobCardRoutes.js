const express = require("express");
const router = express.Router();
const {
  createJobCard,
  getAllJobCards,
  getJobCardById,
  updateJobCard,
  deleteJobCard,
} = require("../controllers/jobCardController");

router.post("/", createJobCard);
router.get("/", getAllJobCards);
router.get("/:id", getJobCardById);
router.put("/:id", updateJobCard);
router.delete("/:id", deleteJobCard);

module.exports = router;
