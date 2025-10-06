import express, { Request, Response } from "express";
import { indexRouter as routes } from "./routes";

const app = express();
const HOST = process.env?.["SERVER_HOST"] || "localhost";
const PORT = Number(process.env?.["SERVER_PORT"]) || 4001;

app.use(express.json());

app.get("/health", (_: Request, res: Response) => {
  res.send({ message: "API is Working" });
});

app.use("/api/v1", routes);

app.listen(PORT, HOST, () => {
  console.log(`⏳⏳ -> Server Runiing at http://${HOST}:${PORT}`);
});
