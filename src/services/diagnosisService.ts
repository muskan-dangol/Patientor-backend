import diagnosis from "../../data/diagnoses";
import { Diagnosis } from "../types";
const diaries: Diagnosis[] = diagnosis as Diagnosis[];

const getDiagnosis = (): Diagnosis[] => {
  return diaries;
};

export default {
  getDiagnosis,
};
