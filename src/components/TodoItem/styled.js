import styled from 'styled-components'

export const TodoItemContainer=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

`

export const Item=styled.h1`
  color: #000000;
  font-size: 20px;
  font-weight: 500;

`
export const DeleteButton=styled.button`
  background-color: transparent;
  padding: 5px;
  border: 2px solid #ff0b37;
  color: #ff0b37;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
`