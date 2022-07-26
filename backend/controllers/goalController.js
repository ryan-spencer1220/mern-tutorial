const asyncHandler = require("express-async-handler");

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "GET goals!" });
});

// @desc Set goal
// @route POST /api/goals
// @access Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    throw new Error("Please add a text field!");
  }
  res.status(200).json({ message: "SET goals!" });
});

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `UPDATE goal ${req.params.id}` });
});

// @desc Delete goal
// @route DELETE /api/goals:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `DELETE goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
};
