import { Router } from "express";
import { authRouter } from "./auth.route";

const indexRouter: Router = Router();

indexRouter.use("/auth", authRouter);

export { indexRouter };
