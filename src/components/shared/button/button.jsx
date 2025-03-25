import React from 'react'
import { useNavigate } from 'react-router-dom'
import s from './button.module.scss'

export const Button = ({onClick, label, children, to}) => {
	const navigate = useNavigate()
	
	const clickHandler = (e) => {
		e.preventDefault()
		if(to){
			navigate(to)
			return
		}
		onClick()
	}
	
	return (
		<button className={s.button} onClick={clickHandler}>{label || children}</button>
	)
}
