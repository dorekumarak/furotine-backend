import express from 'express';
import {
  loginAdmin,
  getAdminDashboard,
  registerSuperAdmin,
} from '../controllers/adminController.js';

const router = express.Router();

// ✅ Route to login admin/superadmin
router.post('/login', loginAdmin);

// ✅ Protected dashboard route
router.get('/dashboard', getAdminDashboard);

// ✅ TEMPORARY: One-time superadmin creation
router.get('/create-super', registerSuperAdmin);

export default router;
