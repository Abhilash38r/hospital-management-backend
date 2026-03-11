const express = require("express");

const router = express.Router();

const {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
  searchPatient
} = require("../controllers/patientController");

router.post("/", createPatient);

router.get("/", getPatients);

router.get("/:id", getPatientById);

router.put("/:id", updatePatient);

router.delete("/:id", deletePatient);

router.get("/search/:name", searchPatient);

module.exports = router;