import express from 'express'

const router = express.Router()

// GET all students
router.get('/get-students', (req, res) => {
  res.status(200).json({
    success: true,
    students: ['Ram', 'Shyam', 'Ravi']
  })
})

export default router
