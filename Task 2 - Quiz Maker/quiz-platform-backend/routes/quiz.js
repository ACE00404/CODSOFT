const express = require('express');
const Quiz = require('../models/Quiz');

const router = express.Router();

// Create a quiz
router.post('/create', async (req, res) => {
  const { title, questions, createdBy } = req.body;

  try {
    const newQuiz = new Quiz({ title, questions, createdBy });
    await newQuiz.save();

    res.status(201).json(newQuiz);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
});

// Fetch all quizzes
router.get('/', async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(404).json({ message: 'Quizzes not found.' });
  }
});

// Fetch a specific quiz
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const quiz = await Quiz.findById(id);

    if (!quiz) return res.status(404).json({ message: 'Quiz not found.' });

    res.status(200).json(quiz);
  } catch (error) {
    res.status(404).json({ message: 'Quiz not found.' });
  }
});

// Submit quiz answers
router.post('/submit/:id', async (req, res) => {
  const { id } = req.params;
  const { answers } = req.body;

  try {
    const quiz = await Quiz.findById(id);

    if (!quiz) return res.status(404).json({ message: 'Quiz not found.' });

    let score = 0;

    answers.forEach((answer, index) => {
      if (quiz.questions[index].correctAnswerIndex === answer) {
        score++;
      }
    });

    res.status(200).json({ score, totalQuestions: quiz.questions.length });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
});

module.exports = router;
