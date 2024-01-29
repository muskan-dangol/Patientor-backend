import { v1 as uuid} from 'uuid';
import patient from "../../data/patients";
import { Patient, NonSensitivePatientEntry, NewPatientEntry } from "../types";

const patients: Patient[] = patient as Patient[];

const getPatient = (): Patient[] => {
  return patients;
};

const getNonSensitivePatientEntry = (): NonSensitivePatientEntry[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};
export const id = uuid();

const addPatient = (entry: NewPatientEntry): Patient => {
  const newPatientEntry = {
    id,
    ...entry,
  };
  patients.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getPatient,
  getNonSensitivePatientEntry,
  addPatient
};
