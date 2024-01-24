import styled from 'styled-components';

export const Button = styled.button`
  margin: 4px;
  padding: 4px;
  width: 72px;
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid #ccc8c8;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #85b9de;
  }
`;

export const Container = styled.div`
  margin-bottom: 4px;
`;
