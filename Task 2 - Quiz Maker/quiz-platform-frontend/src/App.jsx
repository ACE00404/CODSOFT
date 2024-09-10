import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import AuthForm from './components/AuthForm';
import TakeQuiz from './components/TakeQuiz';
import QuizResults from './components/QuizResults';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fafafa;
  padding: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const App = () => {
  const [questions, setQuestions] = useState([
    {
      questionText: 'What is the capital of France?',
      options: [
        { text: 'Berlin' },
        { text: 'Madrid' },
        { text: 'Paris' },
        { text: 'Lisbon' },
      ],
      correctAnswerIndex: 2,
    },
    {
      questionText: 'What is 2 + 2?',
      options: [
        { text: '3' },
        { text: '4' },
        { text: '5' },
        { text: '6' },
      ],
      correctAnswerIndex: 1,
    },
  ]);

  const [userAnswers, setUserAnswers] = useState(new Array(questions.length).fill(-1));
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [score, setScore] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authType, setAuthType] = useState('login');

  const handleSubmitQuiz = () => {
    let calculatedScore = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswerIndex) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setIsQuizFinished(true);
  };

  const handleAnswerChange = (questionIndex, optionIndex) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = optionIndex;
    setUserAnswers(updatedAnswers);
  };

  const handleQuizRestart = () => {
    setIsQuizFinished(false);
    setScore(null);
    setUserAnswers(new Array(questions.length).fill(-1));
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        {!isLoggedIn ? (
          <>
            <AuthForm type={authType} />
            <Button onClick={() => setAuthType(authType === 'login' ? 'register' : 'login')}>
              Switch to {authType === 'login' ? 'Register' : 'Login'}
            </Button>
          </>
        ) : (
          <>
            {!isQuizFinished ? (
              <TakeQuiz
                questions={questions}
                userAnswers={userAnswers}
                onAnswerChange={handleAnswerChange}
                onSubmitQuiz={handleSubmitQuiz}
              />
            ) : (
              <>
                <QuizResults questions={questions} userAnswers={userAnswers} />
                <Button onClick={handleQuizRestart}>Restart Quiz</Button>
              </>
            )}
            <Button onClick={handleLogout}>Logout</Button>
          </>
        )}
      </AppContainer>
    </>
  );
};

export default App;
