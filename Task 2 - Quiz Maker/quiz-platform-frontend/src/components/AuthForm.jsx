import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #007bff;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
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

const ErrorMessage = styled.p`
  color: #e74c3c;
  text-align: center;
`;

const AuthForm = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = type === 'login' ? '/api/login' : '/api/register';
      const response = await axios.post(url, { email, password });
      console.log(`${type} successful:`, response.data);
      setError('');
    } catch (err) {
      console.error(`${type} failed:`, err.response?.data || err.message);
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <FormContainer>
      <Title>{type === 'login' ? 'Login' : 'Register'}</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">{type === 'login' ? 'Login' : 'Register'}</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </form>
    </FormContainer>
  );
};

export default AuthForm;
