import { useContext } from 'react'
import { TodoContext } from '../store/todo-context'
import styles from '../styles/Todos.module.css'
import TodoItem from './TodoItem'

const Todos = () => {
	const { todos, removeTodo } = useContext(TodoContext)

	const onTodoClick = (todoId: string) => {
		removeTodo(todoId)
	}

	return (
		<ul className={styles.todos}>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					text={todo.text}
					onTodoClick={onTodoClick.bind(null, todo.id)}
				/>
			))}
		</ul>
	)
}

export default Todos
