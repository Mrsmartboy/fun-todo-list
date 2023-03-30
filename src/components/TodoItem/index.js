
import {TodoItemContainer,Item,DeleteButton} from './styled'

const TodoItem=(props)=>{
    const {eachTodo,onDelete}=props
    const {title,id}=eachTodo 
    
    const onDeleteItem=()=>{
        onDelete(id)
    }

    return(
        <TodoItemContainer>
            <Item>{title}</Item>
            <DeleteButton type="button" onClick={onDeleteItem}>Delete</DeleteButton>
        </TodoItemContainer>
    )


}

export default TodoItem