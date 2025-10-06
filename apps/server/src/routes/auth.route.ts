import express, { Router } from "express";

const authRouter: Router = Router();

authRouter.get("/login", (req, res) => {
  const ans = req.params;

  res.send({ message: "login api" });
});

export { authRouter };
