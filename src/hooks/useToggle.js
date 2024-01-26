import { useReducer } from 'react'

const initialState = (values) => {
	return {
		index: 0,
		values: [...(values || [true, false])],
	}
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'toggle':
			return {
				...state,
				index: (state.index + 1) % state.values.length,
			}
		case 'set':
			const value = action.payload
			const index = state.values.indexOf(value)
			return index !== -1 ? { ...state, index: index } : state
		default:
			return state
	}
}

export const useToggle = (values) => {
	const [state, dispatch] = useReducer(reducer, values, initialState)
	const value = state.values[state.index]
	const toggle = (value) =>
		value === undefined
			? dispatch({ type: 'toggle' })
			: dispatch({ type: 'set', payload: value })

	return [value, toggle]
}
