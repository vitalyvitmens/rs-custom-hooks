import { Button } from '../components/Button'
import { useToggle } from '../hooks/useToggle'
import styles from './tasks.module.css'

export function AdditionalTask2() {
	const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal'])
	const [theme, toggleTheme] = useToggle(['light', 'dark'])

	const styleTheme = {
		backgroundColor: theme === 'light' ? 'white' : 'black',
		color: theme === 'light' ? 'black' : 'white',
	}

	return (
		<>
			<div>
				<h4>Additional Task2</h4>
				<div style={styleTheme} className={styles.additionalTask2}>
					<h3>Текст для тестирования смены темы</h3>
					<div
						style={{
							background: value,
							margin: 'auto',
							width: '200px',
							height: '140px',
							paddingTop: '60px',
							borderRadius: '10px',
						}}
					>
						<Button onClick={() => toggle()}>{value}</Button>
					</div>
					<Button onClick={() => toggleTheme()}>
						{theme === 'dark'
							? 'Сменить на светлую тему'
							: 'Сменить на темную тему'}
					</Button>
				</div>
			</div>
		</>
	)
}
