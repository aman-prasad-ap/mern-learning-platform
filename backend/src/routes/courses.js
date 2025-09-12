import express from 'express';
import { 
  getCourses, 
  getCourse, 
  createCourse, 
  updateCourse, 
  deleteCourse,
  enrollCourse,
  getEnrolledCourses
} from '../controllers/courseController.js';
import { protect } from '../middleware/auth.js';
import Enrollment from '../models/Enrollment.js';  // ← ADD THIS IMPORT
import Course from '../models/Course.js';  // Should already be there

const router = express.Router();

// Public routes
router.route('/')
  .get(getCourses)
  .post(protect, createCourse);

router.route('/:id')
  .get(getCourse)
  .put(protect, updateCourse)
  .delete(protect, deleteCourse);

// Enrollment routes (protected)
router.route('/:id/enroll')
  .post(protect, enrollCourse);

router.route('/user/enrolled')
  .get(protect, getEnrolledCourses);

// TEMPORARY: Cleanup endpoint for enrollment issues
router.delete('/debug/cleanup-enrollment', async (req, res) => {
  try {
    // Delete all enrollments for the test user
    const result = await Enrollment.deleteMany({
      user: "68b9c6a8c9d28d898a02c561"
    });
    
    // Reset student counts in all courses
    await Course.updateMany({}, { $set: { students: [] } });
    
    res.json({ 
      success: true, 
      message: 'Enrollment cleanup completed',
      deletedEnrollments: result.deletedCount
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;