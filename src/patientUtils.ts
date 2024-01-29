import { NewPatientEntry } from "./types";
import {
  parseName,
  parseDateOfBirth,
  parseGender,
  parseOccupation,
  parseSsn,
} from "./types";

const toNewPatientEntry = (object: unknown): NewPatientEntry => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing patient data");
  }
  if (
    "name" in object &&
    "dateOfBirth" in object &&
    "gender" in object &&
    "occupation" in object &&
    "ssn" in object
  ) {
    const newPatientEntry: NewPatientEntry = {
      name: parseName(object.name),
      dateOfBirth: parseDateOfBirth(object.dateOfBirth),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation),
      ssn: parseSsn(object.ssn),
    };
    return newPatientEntry;
  }
  throw new Error("Incorrect data: some fileds are missing");
};

export default toNewPatientEntry;
