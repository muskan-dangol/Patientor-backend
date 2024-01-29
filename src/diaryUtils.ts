import {
  NewDiaryEntry,
  parseComment,
  parseDate,
  parseWeather,
  parseVisibility,
} from "./types";

const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }
  if (
    "comment" in object &&
    "date" in object &&
    "weather" in object &&
    "visibility" in object
  ) {
    const newEntry: NewDiaryEntry = {
      comment: parseComment(object.comment),
      date: parseDate(object.date),
      weather: parseWeather(object.weather),
      visibility: parseVisibility(object.visibility),
    };
    return newEntry;
  }
  throw new Error("Incorrect data: some fileds are missing");
};

export default toNewDiaryEntry;
