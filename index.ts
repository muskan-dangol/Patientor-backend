import express from "express";
import cors from 'cors';
import diaryRouter from "./src/routes/diaries";
import diagnosisRouter from "./src/routes/diagnosis";
import patientRouter from "./src/routes/patient";

const app = express();
app.use(express.json());

const PORT = 3001;

app.use(cors());


app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.use("/api/diaries", diaryRouter);

app.use("/api/diagnosis", diagnosisRouter);

app.use("/api/patients", patientRouter);
app.listen(PORT, () => {
  console.log(PORT);
  console.log(`Server listenning on port ${PORT}`);
});
