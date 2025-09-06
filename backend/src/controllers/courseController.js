import Course from '../models/Course.js';
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