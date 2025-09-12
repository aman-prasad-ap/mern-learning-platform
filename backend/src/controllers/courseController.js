// import Course from '../models/Course.js';
// import asyncHandler from 'express-async-handler';

// // @desc    Get all courses
// // @route   GET /api/courses
// // @access  Public
// export const getCourses = asyncHandler(async (req, res) => {
//   const courses = await Course.find({}).populate('instructor', 'name email');
//   res.json({
//     success: true,
//     count: courses.length,
//     data: courses
//   });
// });

// // @desc    Get single course
// // @route   GET /api/courses/:id
// // @access  Public
// export const getCourse = asyncHandler(async (req, res) => {
//   const course = await Course.findById(req.params.id)
//     .populate('instructor', 'name email')
//     .populate('students', 'name email');

//   if (!course) {
//     res.status(404);
//     throw new Error('Course not found');
//   }

//   res.json({
//     success: true,
//     data: course
//   });
// });

// // @desc    Create new course
// // @route   POST /api/courses
// // @access  Private
// export const createCourse = asyncHandler(async (req, res) => {
//   const { title, description, price, duration, level, category } = req.body;

//   const course = await Course.create({
//     title,
//     description,
//     price,
//     duration,
//     level,
//     category,
//     instructor: req.user._id
//   });

//   res.status(201).json({
//     success: true,
//     data: course
//   });
// });

// // @desc    Update course
// // @route   PUT /api/courses/:id
// // @access  Private
// export const updateCourse = asyncHandler(async (req, res) => {
//   let course = await Course.findById(req.params.id);

//   if (!course) {
//     res.status(404);
//     throw new Error('Course not found');
//   }

//   // Check if user is course instructor
//   if (course.instructor.toString() !== req.user._id.toString()) {
//     res.status(401);
//     throw new Error('Not authorized to update this course');
//   }

//   course = await Course.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true
//   });

//   res.json({
//     success: true,
//     data: course
//   });
// });

// // @desc    Delete course
// // @route   DELETE /api/courses/:id
// // @access  Private
// export const deleteCourse = asyncHandler(async (req, res) => {
//   const course = await Course.findById(req.params.id);

//   if (!course) {
//     res.status(404);
//     throw new Error('Course not found');
//   }

//   // Check if user is course instructor
//   if (course.instructor.toString() !== req.user._id.toString()) {
//     res.status(401);
//     throw new Error('Not authorized to delete this course');
//   }

//   await Course.findByIdAndDelete(req.params.id);

//   res.json({
//     success: true,
//     message: 'Course deleted successfully'
//   });
// });


import Course from '../models/Course.js';
import Enrollment from '../models/Enrollment.js';
import asyncHandler from 'express-async-handler';

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public
export const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({}).populate('instructor', 'name email');
  res.json({
    success: true,
    count: courses.length,
    data: courses
  });
});

// @desc    Get single course
// @route   GET /api/courses/:id
// @access  Public
export const getCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id)
    .populate('instructor', 'name email')
    .populate('students', 'name email');

  if (!course) {
    res.status(404);
    throw new Error('Course not found');
  }

  res.json({
    success: true,
    data: course
  });
});

// @desc    Create new course
// @route   POST /api/courses
// @access  Private
export const createCourse = asyncHandler(async (req, res) => {
  const { title, description, price, duration, level, category } = req.body;

  const course = await Course.create({
    title,
    description,
    price,
    duration,
    level,
    category,
    instructor: req.user._id
  });

  res.status(201).json({
    success: true,
    data: course
  });
});

// @desc    Update course
// @route   PUT /api/courses/:id
// @access  Private
export const updateCourse = asyncHandler(async (req, res) => {
  let course = await Course.findById(req.params.id);

  if (!course) {
    res.status(404);
    throw new Error('Course not found');
  }

  // Check if user is course instructor
  if (course.instructor.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized to update this course');
  }

  course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.json({
    success: true,
    data: course
  });
});

// @desc    Delete course
// @route   DELETE /api/courses/:id
// @access  Private
export const deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    res.status(404);
    throw new Error('Course not found');
  }

  // Check if user is course instructor
  if (course.instructor.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized to delete this course');
  }

  await Course.findByIdAndDelete(req.params.id);

  res.json({
    success: true,
    message: 'Course deleted successfully'
  });
});

// @desc    Enroll user in a course
// @route   POST /api/courses/:id/enroll
// @access  Private
export const enrollCourse = asyncHandler(async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      res.status(404);
      throw new Error('Course not found');
    }

    // Check if already enrolled
    const existingEnrollment = await Enrollment.findOne({
      user: req.user._id,
      course: req.params.id
    });

    if (existingEnrollment) {
      res.status(400);
      throw new Error('Already enrolled in this course');
    }

    // Create enrollment
    const enrollment = await Enrollment.create({
      user: req.user._id,
      course: req.params.id,
      progress: 0
    });

    // ✅ FIXED: Update course student count - Add user to students array
    course.students.push(req.user._id);
    await course.save();

    // Populate the enrollment with course details
    await enrollment.populate('course', 'title instructor price');

    res.status(201).json({
      success: true,
      message: 'Successfully enrolled in course',
      data: enrollment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Enrollment failed',
      error: error.message
    });
  }
});

// @desc    Get user's enrolled courses
// @route   GET /api/courses/user/enrolled
// @access  Private
export const getEnrolledCourses = asyncHandler(async (req, res) => {
  const enrollments = await Enrollment.find({ user: req.user._id })
    .populate({
      path: 'course',
      select: 'title description price instructor duration level category students rating',
      populate: {
        path: 'instructor',
        select: 'name email'
      }
    })
    .sort({ enrolledAt: -1 });

  res.json({
    success: true,
    count: enrollments.length,
    data: enrollments
  });
});