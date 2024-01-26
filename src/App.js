import { Task1 } from './Tasks/Task1'
import { Task2 } from './Tasks/Task2'
import { Task3 } from './Tasks/Task3'
import { Task4 } from './Tasks/Task4'
import { AdditionalTask1 } from './Tasks/AdditionalTask1'
import { AdditionalTask2 } from './Tasks/AdditionalTask2'
import styles from './app.module.css'

export const App = () => {
	return (
		<div className={styles.app}>
			<h1>Custom Hooks</h1>
			<header className={styles.appHeader}>
				<Task1 />
				<Task2 />
				<Task3 />
				<Task4 />
				<AdditionalTask1 />
				<AdditionalTask2 />
			</header>
		</div>
	)
}
