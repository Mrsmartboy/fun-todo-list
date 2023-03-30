import {useState} from 'react'
import TodoItem from '../TodoItem'

import {TodoContainer,CardContainer,Header,ListContainer} from './styled'

const initialTodosList = [
    {
      id: 1,
      title: 'Book the ticket for today evening',
    },
    {
      id: 2,
      title: 'Rent the movie for tomorrow movie night',
    },
    {
      id: 3,
      title: 'Confirm the slot for the yoga session tomorrow morning',
    },
    {
      id: 4,
      title: 'Drop the parcel at Bloomingdale',
    },
    {
      id: 5,
      title: 'Order fruits on Big Basket',
    },
    {
      id: 6,
      title: 'Fix the production issue',
    },
    {
      id: 7,
      title: 'Confirm my slot for Saturday Night',
    },
    {
      id: 8,
      title: 'Get essentials for Sunday car wash',
    },
  ]

  const SimpleTodos=()=>{ 
    const [todoList,setTodoList]=useState(initialTodosList)

    const onDeleteTodo=(id)=>{
        const filteredList=todoList.filter(eachTodo=>(
            eachTodo.id!==id
        ))

        setTodoList(filteredList)
    }
    


    return(
        <TodoContainer>
            <CardContainer>
                <Header>
                    Simple Todos
                </Header>
                <ListContainer>
                {todoList.map(eachTodo=>(
                    <TodoItem eachTodo={eachTodo} key={eachTodo.id} onDelete={onDeleteTodo}/>
                ))}
                </ListContainer>



            </CardContainer>
        </TodoContainer>

    )
  }

  export default SimpleTodos