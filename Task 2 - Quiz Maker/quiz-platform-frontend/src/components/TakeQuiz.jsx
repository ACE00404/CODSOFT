import React from 'react';
import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

const QuestionText = styled.h3`
  margin: 0;
`;

const Option = styled.label`
  display: block;
  margin: 5px 0;
  cursor: pointer;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e1e1e1;
  }
`;

const Button = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.02);
  }
`;

const TakeQuiz = ({ questions, userAnswers, onAnswerChange, onSubmitQuiz }) => (
  <QuizContainer>
    {questions.map((question, index) => (
      <QuestionContainer key={index}>
        <QuestionText>{question.questionText}</QuestionText>
        {question.options.map((option, optionIndex) => (
          <Option key={optionIndex}>
            <input
              type="radio"
              name={`question-${index}`}
              checked={userAnswers[index] === optionIndex}
              onChange={() => onAnswerChange(index, optionIndex)}
            />
            {option.text}
          </Option>
        ))}
      </QuestionContainer>
    ))}
    <Button onClick={onSubmitQuiz}>Submit Quiz</Button>
  </QuizContainer>
);

export default TakeQuiz;
