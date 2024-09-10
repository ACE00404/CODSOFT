import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Backend server URL

export const getQuizzes = async () => {
  const response = await axios.get(`${API_URL}/quiz`);
  return response.data;
};

export const createQuiz = async (quizData) => {
  const response = await axios.post(`${API_URL}/quiz`, quizData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};
