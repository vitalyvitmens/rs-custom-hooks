import { Button } from '../components/Button'
import { useFetch } from '../hooks/useFetch'
import styles from './tasks.module.css'

export function Task1() {
	const { data, isLoading, error, refetch } = useFetch(
		'https://jsonplaceholder.typicode.com/posts'
	)

	return (
		<div>
			<div>
				<Button
					onClick={() =>
						refetch({
							params: {
								_limit: 3,
							},
						})
					}
				>
					Перезапросить
				</Button>
			</div>
			{isLoading && 'Загрузка...'}
			{error && 'Произошла ошибка'}
			{data &&
				!isLoading &&
				data.map((i) => (
					<ul key={i.id}>
						<li className={styles.li}>{i.title}</li>
					</ul>
				))}
		</div>
	)
}
