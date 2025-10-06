import { Router } from "express";

const authRouter: Router = Router();

authRouter.get("/login", (_, res) => {
  res.send({ message: "login api" });
});

export { authRouter };
