import { useContext, useRef } from 'react'
import { TodoContext } from '../store/todo-context'
import styles from '../styles/NewTodo.module.css'

const NewTodo: React.FC = () => {
	const { addTodo } = useContext(TodoContext)
	const todoRef = useRef<HTMLInputElement>(null)

	const onSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault()
		const todoText = todoRef.current!.value
		addTodo(todoText)
	}

	return (
		<form className={styles.form} onSubmit={onSubmitHandler}>
			<label htmlFor='todo'>Todo:</label>
			<input type='text' id='todo' ref={todoRef} />
			<button type='submit'>Add todo</button>
		</form>
	)
}

export default NewTodo
