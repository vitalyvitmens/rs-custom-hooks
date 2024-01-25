import { useLocalStorage } from '../hooks/useLocalStorage'
import { Button } from '../components/Button'
import styles from './tasks.module.css'

export function Task2() {
	const [token, { setItem, removeItem }] = useLocalStorage('token')

	return (
		<div>
			<h4>Task2</h4>
			<p className={styles.token}>Твой токен: {token}</p>
			<div>
				<Button onClick={() => setItem('new-token')}>Задать токен</Button>
				<Button onClick={() => removeItem()}>Удалить токен</Button>
			</div>
		</div>
	)
}
