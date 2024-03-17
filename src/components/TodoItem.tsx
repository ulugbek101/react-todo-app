import styles from '../styles/TodoItem.module.css'

const TodoItem: React.FC<{ text: string; onTodoClick: () => void }> = props => {
	return <li className={styles.item} onClick={props.onTodoClick}>{props.text}</li>
}

export default TodoItem
