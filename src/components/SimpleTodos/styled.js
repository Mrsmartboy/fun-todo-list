import styled from 'styled-components'

export const TodoContainer=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #ffc2a0;
`
export const CardContainer=styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #ffffff;
   border-radius: 10px;
   padding: 15px;
   margin: 20px;
   width: 80%;
`
export const Header=styled.h1`
  color: #ff8542;
  font-size: 30px;
  font-weight: bold;
  
`

export const ListContainer=styled.ul`
   list-style-type: none;
   display: flex;
   flex-direction: column;
   
`