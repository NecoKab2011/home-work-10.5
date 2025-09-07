import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: grey;
  width: 350px;
  border-radius: 30px;
  border: 2px solid black;
  color: white;
  font-family: sans-serif;
  font-size: 20px;
  margin-bottom: 10px
`;

export const Btn = styled.button`
  padding: 5px 10px;
  border-radius: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
`;