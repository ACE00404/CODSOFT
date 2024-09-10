import React from 'react';
import styled from 'styled-components';

const ResultsContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ResultText = styled.p`
  font-size: 1.2em;
  text-align: center;
`;

const QuizResults = ({ questions, userAnswers }) => {
  const score = questions.reduce((acc, question, index) => (
    userAnswers[index] === question.correctAnswerIndex ? acc + 1 : acc
  ), 0);

  return (
    <ResultsContainer>
      <ResultText>Your Score: {score} / {questions.length}</ResultText>
      {questions.map((question, index) => (
        <div key={index}>
          <h4>{question.questionText}</h4>
          <ul>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex} style={{ color: optionIndex === question.correctAnswerIndex ? 'green' : 'red' }}>
                {option.text} {userAnswers[index] === optionIndex ? '(Your Answer)' : ''}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </ResultsContainer>
  );
};

export default QuizResults;
