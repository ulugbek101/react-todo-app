import { createContext, useState } from 'react'
import Todo from '../models/todo'

type TodoContextType = {
	todos: Todo[]
	addTodo: (todoText: string) => void
	removeTodo: (todoId: string) => void
}

export const TodoContext = createContext<TodoContextType>({
	todos: [],
	addTodo: () => {},
	removeTodo: () => {},
})

const TodoContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [todos, setTodos] = useState<Todo[]>([])

	const addTodo = (todoText: string) => {
		const newTodo = new Todo(new Date().toISOString(), todoText)
		setTodos(prevTodos => [newTodo, ...prevTodos])
	}

	const removeTodo = (todoId: string) => {
		setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
	}

	const todoContextValues: TodoContextType = {
		todos,
		addTodo,
		removeTodo,
	}
	return (
		<TodoContext.Provider value={todoContextValues}>
			{children}
		</TodoContext.Provider>
	)
}

export default TodoContextProvider
