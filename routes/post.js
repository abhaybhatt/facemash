import express from 'express';
import { createProfile,getProfile,hotProfile } from "../controllers/profile.js"
const router = express.Router();

router.post('/',createProfile);
router.get('/',getProfile);
router.patch('/:id/hotProfile',hotProfile);

export default router;