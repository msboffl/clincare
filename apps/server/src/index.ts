import express, { Request, Response } from "express";

const app = express();
const HOST = process.env?.["SERVER_HOST"] || 'localhost';
const PORT = Number(process.env?.["SERVER_PORT"]) || 4001;


app.get("/health", (_: Request, res: Response) => {
  res.send({ message: "API is Working" });
});

app.listen(PORT, HOST, () => {
  console.log(`⏳⏳ => Server Runiing at http://${HOST}:${PORT}`);
});
