import express from 'express';
import homeController from '../controllers/homeController.js'; // Đảm bảo đường dẫn đúng

const router = express.Router();

// Định nghĩa các route
router.get('/', homeController.getHomePage); // Kiểm tra lại xem `getHomePage` có tồn tại không
router.get('/about', homeController.getAboutPage);
router.get('/crud', homeController.getCRUD);
router.post('/post-crud', homeController.postCRUD);
router.get('/get-crud', homeController.displayGetCRUD);

export default router;
