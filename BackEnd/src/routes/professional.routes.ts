import { Request, Response, Router } from "express";
import {
  createProfessional,
  getAllProfessionals,
  getProfessionalById,
  updateProfessionalById,
  deleteProfessionalById,
  checkProfessionalEmail,
  getProfessionalByEmail,
} from "../controllers/professional.controller";
import ProfessionalSanitization from "../utils/professional.sanitization";
import validateRequest from "../middleware/validationMiddleware";
import verifyToken from "../middleware/authentication";

const router = Router();

router.post(
  "/professionals",
  // ProfessionalSanitization,
  validateRequest,
  createProfessional
);

router.get("/professionals", getAllProfessionals);

router.get("/professionals/:id", getProfessionalById);

router.put(
  "/professionals/:id",
  //verifyToken,
  //ProfessionalSanitization,
  validateRequest,
  updateProfessionalById
);

router.delete("/professionals/:id", deleteProfessionalById);

router.get(
  "/professionals/check-email-availability/:email",
  checkProfessionalEmail
);

router.get("/professionals/getProfessional/:email", getProfessionalByEmail);

export default router;
