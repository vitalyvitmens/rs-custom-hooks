// import { Task1 } from './Tasks/Task1'
// import { Task2 } from './Tasks/Task2'
import { Task3 } from './Tasks/Task3'
// import { Task4 } from './Tasks/Task4'
import styles from './app.module.css'

export const App = () => {
	return (
		<div className={styles.app}>
			<h1>Custom Hooks</h1>
			<header className={styles.appHeader}>
				{/* <Task1 /> */}
				{/* <Task2 /> */}
				<Task3 />
				{/* <Task4 /> */}
			</header>
		</div>
	)
}
