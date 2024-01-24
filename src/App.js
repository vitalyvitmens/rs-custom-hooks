import { Tasks1 } from './Tasks/Tasks1'
import { Tasks2 } from './Tasks/Tasks2'
import { Tasks3 } from './Tasks/Tasks3'
import { Tasks4 } from './Tasks/Tasks4'
import styles from './app.module.css'

export const App = () => {
	return (
		<div className={styles.app}>
			<h1>Custom Hooks</h1>
			<header className={styles.appHeader}>
				<Tasks1 />
				<Tasks2 />
				<Tasks3 />
				<Tasks4 />
			</header>
		</div>
	)
}
