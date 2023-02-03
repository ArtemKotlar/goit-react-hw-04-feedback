import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid black;
  border-radius: 2px;
  background-color: #5ceb39b2;
  color: black;
  padding: 7px 14px;
  margin-right: 10px;
  font-size: 14px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #ffa3a3;
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
