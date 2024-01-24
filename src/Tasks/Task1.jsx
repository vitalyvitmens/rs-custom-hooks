import { useLayoutEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { Button } from '../components/Button'
import styles from './tasks.module.css'

export function Task1() {
	const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts')
	const { data, isLoading, error, newOptions, refetch } = useFetch(url)

	useLayoutEffect(() => {
		newOptions &&
			setUrl(
				url.concat(`?${new URLSearchParams(newOptions.params).toString()}`)
			)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [newOptions])

	return (
		<div>
			<h4>Task1</h4>
			<div>
				<Button
					disabled={newOptions}
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
			<div className={styles.loading}>{isLoading && 'Загрузка...'}</div>
			<div className={styles.err}>{error && 'Произошла ошибка!'}</div>
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
