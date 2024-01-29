import express from "express";
import patientService from "../services/patientService";
import toNewPatientEntry from "../patientUtils";
const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientService.getNonSensitivePatientEntry());
});

router.post("/", (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);
    const addedEntry = patientService.addPatient(newPatientEntry);
    res.json(addedEntry);
  } catch (error) {
    let errorMessage = "something went wrong while adding patient details";
    if (error instanceof Error) {
      errorMessage += "Error " + errorMessage;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
